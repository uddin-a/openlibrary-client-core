// OpenLibrary Client Base class

interface OpenLibraryAuthS3 {
    access: string,
    secret: string,
}

interface OpenLibraryAuthSessionCookie {}

interface OpenLibraryConfig {

}

class OLCBase {
    config: OpenLibraryConfig

    constructor(config: OpenLibraryConfig) {
        this.config = config;
    }
}