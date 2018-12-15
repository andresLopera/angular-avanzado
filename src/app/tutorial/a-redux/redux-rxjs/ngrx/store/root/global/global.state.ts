export interface GlobalState {
  message: string;
  status?: string;
}

export const GLOBAL_INITIAL_STATE: GlobalState = {
  message: '',
  status: 'info'
};
