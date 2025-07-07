import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '../state/userStore';

const API_URL = '/api/user';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  pic?: string;
}

export const loginApi = async (payload: LoginPayload) => {
  const { data } = await axios.post(`${API_URL}/login`, payload);
  return data;
};

export const signupApi = async (payload: SignupPayload) => {
  const { data } = await axios.post(API_URL, payload);
  return data;
};

export const useLoginMutation = () => {
  const setUser = useUserStore((s) => s.setUser);
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setUser(data);
    },
  });
};

export const useSignupMutation = () => {
  const setUser = useUserStore((s) => s.setUser);
  return useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      setUser(data);
    },
  });
}; 