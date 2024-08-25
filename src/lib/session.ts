import { SessionOptions } from "iron-session";

export interface OsuToken {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface OsuUser {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

export interface SessionData {
  osuUser: OsuUser | undefined;
}

export const defaultSession: SessionData = {
  osuUser: undefined,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_KEY!,
  cookieName: "taiko-utils-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function makeOsuUserFromToken(token: OsuToken): OsuUser {
  return {
    accessToken: token.access_token,
    refreshToken: token.refresh_token,
    expiresAt: new Date(new Date().getTime() + token.expires_in * 1000),
  };
}
