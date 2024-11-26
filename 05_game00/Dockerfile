# Node.js를 기본 이미지로 사용
FROM node:latest

# 컨테이너 내의 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 나머지 애플리케이션 코드 복사
COPY . .

# 애플리케이션이 실행될 포트 노출
EXPOSE 3000

# 애플리케이션 실행 명령
CMD ["npm", "start"]

