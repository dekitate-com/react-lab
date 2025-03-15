import { useSyncExternalStore } from "react";

export const useSyncSessionStorage = <T,>(key: string) => {
	const setItem = (value: T) => {
		try {
			sessionStorage.setItem(key, JSON.stringify(value));
		} catch {}
	};

	const removeItem = () => {
		try {
			sessionStorage.removeItem(key);
		} catch {}
	};

	const subscribe = () => {
		window.addEventListener("storage", () => {});

		return () => {
			window.removeEventListener("storage", () => {});
		};
	};

	const item = useSyncExternalStore(subscribe, () => {
		try {
			return sessionStorage.getItem(key);
		} catch {
			return;
		}
	});

	return { setItem, removeItem, item };
};
