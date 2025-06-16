# 使用 Node 20 作為基礎映像，啟用 corepack 以支援 yarn 4
FROM node:20-alpine

WORKDIR /app

# 啟用 corepack 並安裝 yarn 4.9.2
RUN corepack enable && corepack prepare yarn@4.9.2 --activate

# 複製所有專案檔案
COPY . .

# 安裝依賴
RUN yarn install

# 啟用 3000 端口
EXPOSE 3000

# 啟動服務
CMD ["yarn", "start"] 