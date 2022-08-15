import archiver from "archiver";

declare module 'archiver' {
    interface CoreOptions extends archiver {
        encryptionMethod: 'aes256' | 'zip20' | undefined;
        password: string | undefined;
    }
}