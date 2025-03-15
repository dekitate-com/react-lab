"use client";

import { useSyncSessionStorage } from "./hooks/use-sync-session-storage";

export const App = () => {
	const { setItem, removeItem, item } = useSyncSessionStorage<string>("test");
	return (
		<div>
			<p>This is Client App</p>
			<button type="button" onClick={() => setItem("hoge")}>
				登録
			</button>
			<button type="button" onClick={removeItem}>
				削除
			</button>
			{item}
		</div>
	);
};
