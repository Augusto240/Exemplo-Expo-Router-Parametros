import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    
    <Stack>
      
      <Stack.Screen name="index" options={{ title: 'Formulário de Cadastro' }} />
      <Stack.Screen name="detalhes" options={{ title: 'Dados Recebidos' }} />
    </Stack>
  );
}