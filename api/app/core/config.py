from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    ENV: str = "development"
    API_HOST: str = "0.0.0.0"
    API_PORT: int = 8000
    REDIS_URL: str = "redis://localhost:6379/0"
    MUSIC_DIR: str = "./music"
    DOWNLOADS_DIR: str = "./downloads"
    SPOTDL_AUDIO_FORMAT: str = "mp3"
    SPOTDL_BITRATE: str = "320k"
    SPOTDL_MAX_CONCURRENT: int = 4
    CORS_ORIGINS: list[str] = ["http://localhost:3000", "http://localhost:5173"]


settings = Settings()
