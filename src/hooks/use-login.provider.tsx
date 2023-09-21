import AsyncStorage from '@react-native-async-storage/async-storage';
import constate from 'constate';
import {useEffect, useReducer} from 'react';

const initialState = {
  user: null,
  token: null,
  loading: false,
  errors: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        errors: [],
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        errors: [],
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        errors: [],
      };
    default:
      return state;
  }
};

async function mockupLogin(email, password) {
  if (email === 'usuario@teste.com' && password === '123456') {
    return {
      user: {
        id: '1',
        username: 'usuario_mockup',
      },
      token: 'token_de_autenticacao_simulado',
    };
  } else {
    throw new Error('Credenciais inválidas');
  }
}

function useAuth() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function loadUserFromStorage() {
      try {
        const userStr = await AsyncStorage.getItem('user');
        if (userStr) {
          const {user, token} = JSON.parse(userStr);
          dispatch({type: 'LOGIN_SUCCESS', payload: {user, token}});
        }
      } catch (error) {
        console.error('Erro ao carregar usuário do armazenamento:', error);
      }
    }

    loadUserFromStorage();
  }, []);

  async function login(email, password) {
    dispatch({type: 'LOGIN_START'});

    try {
      const {user, token} = await mockupLogin(email, password);
      AsyncStorage.setItem('user', JSON.stringify({user, token}));
      dispatch({type: 'LOGIN_SUCCESS', payload: {user, token}});
    } catch (error) {
      console.error('Erro de login:', error);
      dispatch({type: 'LOGIN_FAILURE', payload: ['Credenciais inválidas']});
    }
  }

  function logout() {
    AsyncStorage.removeItem('user');
    dispatch({type: 'LOGOUT'});
  }

  return {
    ...state,
    login,
    logout,
  };
}

export const [AuthProvider, useAuthContext] = constate(useAuth);
