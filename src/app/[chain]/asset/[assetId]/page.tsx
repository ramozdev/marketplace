"use client";

import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { env } from "@/env.mjs";
import { ReservoirKitProvider, useTokens } from "@reservoir0x/reservoir-kit-ui";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: env.NEXT_PUBLIC_ALCHEMY_ID,
    walletConnectProjectId: env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "NFT Marketplace",

    // Optional
    appDescription: "My NFT Marketplace",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

export default function AssetPage({
  params: { assetId },
}: {
  params: { assetId: string };
}) {
  const [collectionId, tokenId] = assetId ? assetId.split(":") : [];
  const { data: tokens } = useTokens({
    tokens: [`0x8dd23d86c4f85335e124949152fcc23312b0e927:2581`],
  });

  console.log(tokens);

  const token = tokens ? tokens[0] : undefined;

  const tokenName = `${token?.token?.name ?? `#${token?.token?.tokenId}`}`;

  return (
    <ReservoirKitProvider
      options={{
        apiKey: env.RESERVOIR_API_KEY,
        source: "YOUR_SOURCE",
        chains: [],
      }}
    >
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <main>{tokenName}</main>
          <ConnectKitButton />
        </ConnectKitProvider>
      </WagmiConfig>
    </ReservoirKitProvider>
  );
}
