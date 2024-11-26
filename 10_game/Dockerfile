# Node.js 기본 이미지 사용
FROM node:latest

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 종속성 설치
COPY package*.json ./
RUN npm install

# 나머지 코드 복사
COPY . .

# 서버가 실행될 포트 열기
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "start"]

