# Node.js의 최신 이미지를 기반으로 설정
FROM node:latest

# 작업 디렉토리 생성
WORKDIR /usr/src/app

# 패키지 설치를 위해 package.json 및 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 애플리케이션 포트 설정
EXPOSE 8080

# 애플리케이션 실행
CMD ["npm", "start"]

