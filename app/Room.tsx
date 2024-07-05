'use client';

import { ReactNode } from 'react';
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense';
import { LiveMap } from '@liveblocks/client';
import Loader from '@/components/Loader';

export function Room({ children }: { children: ReactNode }) {
	const publicKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!;

	return (
		<LiveblocksProvider publicApiKey={publicKey}>
			<RoomProvider
				id="my-room"
				initialPresence={{
					cursor: null,
					cursorColor: null,
					editingText: null,
				}}
				initialStorage={{
					canvasObjects: new LiveMap(),
				}}
			>
				<ClientSideSuspense fallback={<Loader />}>{() => children}</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	);
}
