# Dockerfile
FROM node:18   

# 애플리케이션 디렉터리 생성
WORKDIR /app

# 필요한 파일 복사 및 종속성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 앱 시작
CMD ["node", "app.js"]   
