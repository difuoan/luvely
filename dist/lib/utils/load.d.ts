import { Ref } from 'vue';
import { State } from '../types/states';

export declare function load(state: Ref<State>, endpoint?: string | URL | Request): Promise<void>;
