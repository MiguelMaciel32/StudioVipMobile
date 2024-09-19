// ToastContext.tsx
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';

const toastVariants = {
  default: 'bg-foreground',
  destructive: 'bg-destructive',
  success: 'bg-green-500',
  info: 'bg-blue-500',
};

interface ToastProps {
  id: number;
  message: string;
  onHide: (id: number) => void;
  variant?: keyof typeof toastVariants;
  duration?: number;
  showProgress?: boolean;
}

function Toast({
  id,
  message,
  onHide,
  variant = 'default',
  duration = 3000,
  showProgress = true,
}: ToastProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(progress, {
        toValue: 1,
        duration: duration - 1000,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => onHide(id));
  }, [duration]);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
        backgroundColor: toastVariants[variant],
        margin: 8,
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      }}
    >
      <Text style={{ color: '#fff', fontWeight: '600' }}>{message}</Text>
      {showProgress && (
        <View style={{ marginTop: 8, borderRadius: 2, overflow: 'hidden' }}>
          <Animated.View
            style={{
              backgroundColor: '#fff',
              height: 2,
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            }}
          />
        </View>
      )}
    </Animated.View>
  );
}

type ToastVariant = keyof typeof toastVariants;

interface ToastMessage {
  id: number;
  text: string;
  variant: ToastVariant;
  duration?: number;
  showProgress?: boolean;
}

interface ToastContextProps {
  toast: (
    message: string,
    variant?: ToastVariant,
    duration?: number,
    showProgress?: boolean
  ) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const toast: ToastContextProps['toast'] = (
    message: string,
    variant: ToastVariant = 'default',
    duration: number = 3000,
    showProgress: boolean = true
  ) => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        variant,
        duration,
        showProgress,
      },
    ]);
  };

  const removeToast = (id: number) => {
    setMessages(prev => prev.filter(message => message.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <View style={{ position: 'absolute', left: 0, right: 0, top: 45 }}>
        {messages.map(message => (
          <Toast
            key={message.id}
            id={message.id}
            message={message.text}
            variant={message.variant}
            duration={message.duration}
            showProgress={message.showProgress}
            onHide={removeToast}
          />
        ))}
      </View>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
