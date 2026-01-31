import type { magic } from "@/lib/magic";
import type { ethers } from "ethers";
import type { MagicUserMetadata } from "magic-sdk";

export interface AuthContextType {
  user: MagicUserMetadata | null;
  provider: ethers.BrowserProvider | null;
  loading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  magic: typeof magic;
}
