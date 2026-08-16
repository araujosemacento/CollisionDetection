import { writable } from 'svelte/store';

const defaultValue = 'p5js';
const initialValue = typeof window !== 'undefined' 
	? (localStorage.getItem('preferred_code_language') || defaultValue)
	: defaultValue;

export const activeLanguage = writable(initialValue);

if (typeof window !== 'undefined') {
	activeLanguage.subscribe((value) => {
		if (value) {
			localStorage.setItem('preferred_code_language', value);
		}
	});
}
