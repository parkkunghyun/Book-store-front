## 🎨 Book Store Frontend (MERN Stack)

### 프로젝트 개요
Book Store 프로젝트의 프론트엔드 레포지토리입니다.  
Firebase Authentication(구글 로그인)과 JWT 인증을 활용한 온라인 책 쇼핑몰입니다.

---

## 사용 기술 스택

| 기술 | 내용 |
|------|------|
| React | 프론트엔드 개발 |
| Vite | 개발 환경 구성 |
| Redux Toolkit | 전역 상태 관리 (Cart) |
| RTK Query | API 요청 (User, Book, Order 등) |
| Firebase Authentication | 소셜 로그인 (Google Login) |
| React Query | 캐싱 및 서버 상태 관리 |
| Tailwind CSS | 스타일링 |
| Axios | API 통신 |
| Vercel | 프론트엔드 배포 |

---

## 주요 기능

### 📚 Books
- 전체 책 목록 조회 (RTK Query)
- 책 상세 페이지 (RTK Query)

### 🛒 Cart & Order
- 장바구니 기능 (Redux Toolkit)
- 장바구니 추가/삭제/초기화
- 주문하기 (RTK Query)
- 주문 내역 조회 (RTK Query)

### 👤 Auth
- Firebase Google Login
- JWT 발급 후 API 통신
- 내 정보 조회 (RTK Query)

### 🛠️ Admin (관리자)
- 책 추가/수정/삭제 (RTK Query)
- 주문 목록 관리 (RTK Query)
- 대시보드 통계 조회 (RTK Query)

---

## 배포 주소
| 구분 | URL |
|------|-----|
| Frontend | https://book-store-front-smoky.vercel.app |
| Backend API | https://book-store-backend-p88q.onrender.com/api |

---

## 특이사항 & 트러블 슈팅

- Redux Toolkit → 장바구니 전역 상태 관리
- RTK Query → User, Book, Order API 요청 처리
- CORS 문제 → 백엔드 CORS 설정으로 해결
- Firebase Auth → Vercel Domain 등록 필수
- JWT 저장 → localStorage 사용
- Render 무료 플랜 슬립 문제 → UptimeRobot Ping 설정
- 환경변수 관리 → `.env` 파일 활용 (Firebase API Key 등)

---

## GitHub Repository
- Backend → [https://github.com/parkkunghyun/Book-store-backend](https://github.com/parkkunghyun/Book-store-backend)  
- Frontend → [https://github.com/parkkunghyun/Book-store-frontend](https://github.com/parkkunghyun/Book-store-frontend)
