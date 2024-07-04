'use client';

import { ReactNode } from 'react';
import {
	LiveblocksProvider,
	RoomProvider,
	ClientSideSuspense,
} from '@liveblocks/react/suspense';

export function Room({ children }: { children: ReactNode }) {
	const publicKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!;

	return (
		<LiveblocksProvider publicApiKey={publicKey}>
			<RoomProvider id="my-room">
				<ClientSideSuspense fallback={<div>Loading…</div>}>
					{children}
				</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	);
}
