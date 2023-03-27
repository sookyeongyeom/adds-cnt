# 🧪 ADDS CNT 보고서 자동화 관리 시스템

#### 개발 기간 및 팀원 구성

- 개발 기간 : 2022.12
- 팀원 구성 : 개인 프로젝트

🚀 [Production 서버 바로가기](https://adds-cnt.vercel.app)

## Index

1. [프로젝트 개요](#1-프로젝트-개요)
2. [최신 버전 기능 소개](#2-최신-버전-기능-소개)
3. [버전별 소개](#3-버전별-소개)
4. [시작하기](#4-시작하기)
5. [디렉토리 구조](#5-디렉토리-구조)
6. [커밋 컨벤션](#6-커밋-컨벤션)

## 1. 프로젝트 개요

피험자의 데이터를 보고서로 시각화하는 웹 솔루션입니다.  
총 3개의 버전에 걸쳐 발전시켜왔고, 이 저장소는 이 중 최신 버전을 위한 곳입니다.

## 2. 최신 버전 기능 소개

![full](https://user-images.githubusercontent.com/98504939/227967697-33d15755-0cd6-4893-a3d6-8ffeea4bfd93.gif)

### 1. 보고서 렌더링

정해진 포맷의 데이터를 시스템상에 업로드하면, 해당 데이터를 기반으로 보고서를 동적으로 렌더링합니다.

1.  인증된 구글 드라이브에 데이터를 업로드하면, 연동하여 웹으로 가져옵니다.
2.  총 세종류의 데이터(인적사항 데이터, 실험결과 데이터, 연구진 해석 데이터)를 동시 반영할 수 있습니다.
    - 데이터 간 매칭은 피험자 고유ID를 기준으로 합니다.
3.  실험결과 데이터를 그래프로 시각화합니다.

생성된 보고서는 화면 중앙에서 실시간으로 확인할 수 있습니다.

### 2. 인터페이스 편의기능

1.  보고서 확대/축소 기능
2.  좌측 사이드바 기능
    1. 드라이브 바로가기
    2. 파일 선택 및 변경
    3. 현재 선택된 파일명 확인
    4. 피험자 리스트
3.  우측 사이드바 기능
    1. 현재 보고서에 삽입된 데이터 확인
4.  양측 사이드바 숨기기

### 3. 인증 및 데이터 유지 기능

1. 인증
   - 개발자가 허용한 계정만 로그인이 가능합니다.
2. 데이터 유지
   - 새로고침 시에도 인증 정보 및 선택한 파일 정보가 유지됩니다.

### 4. 출력 기능

크롬의 프린트 기능을 사용하여 A4 형식으로 프린트할 수 있습니다.

- 🖨 [출력물 샘플 다운로드](https://github.com/sookyeongyeom/adds-cnt/files/11089197/CNT.pdf)

## 3. 버전별 소개

과거순으로 나열했습니다.

### v1. 바닐라 프로토타입 (22.09)

![vanilla](https://user-images.githubusercontent.com/98504939/228222700-e8056f62-5b1b-489f-a5df-acae58006af4.gif)

🔗 [v1 저장소 바로가기](https://github.com/sookyeongyeom/stress-result)

바닐라 HTML/CSS/JS로 가능성을 검토한 첫번째 프로토타입입니다.

#### 목표

1. 크롬 프린트 기능을 사용해서 출력했을 때 A4 기준으로 구분되도록 퍼블리싱
2. 제공받은 보고서 디자인을 충족
3. 더미 데이터를 기반으로 인적 정보 및 막대 그래프를 렌더링

#### 스택

<a><img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/></a>

---

### v2. 기능 고도화 (22.09 ~ 22.10)

![react](https://user-images.githubusercontent.com/98504939/228222762-6b6b920a-44f3-41af-8930-8581a154f966.gif)

🔗 [v2 저장소 바로가기](https://github.com/sookyeongyeom/stress-result-automation)

#### 추가된 목표

1. 여러개!
2. 데이터를 웹에서 업로드
3. 엑셀로 가져옴
4. 캐시 변경

#### 스택

<a><img src="https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/TS-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/XLSX-217346?style=flat-square&logo=Microsoft excel&logoColor=white"/></a>

---

### v3. 현재 버전 (22.12)

![full](https://user-images.githubusercontent.com/98504939/227967697-33d15755-0cd6-4893-a3d6-8ffeea4bfd93.gif)

📌 [v3 저장소는 보고계신 이곳입니다.](#2-최신-버전-기능-소개)

#### 추가된 목표

1. 구글드라이브 연동 (인증)
2. 데이터 세개로 나눠서 따로 반영
3. 인터페이스상에서 확인가능
4. 인터페이스 고도화(줌인줌아웃)

#### 스택

<a><img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/TS-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=reduxsaga&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Redux Saga-999999?style=flat-square&logo=redux&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Google Drive-4285F4?style=flat-square&logo=Google drive&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/XLSX-217346?style=flat-square&logo=Microsoft excel&logoColor=white"/></a>

## 4. 시작하기

### 1. Clone & Install

```shell
$ git clone https://github.com/sookyeongyeom/adds-cnt
$ cd adds-cnt
$ yarn install
```

### 2. Run

```javascript
$ yarn dev
```

## 5. 디렉토리 구조

```
├── @types              // 모든 타입
├── components
│   ├── DashBoard       // 대시보드 UI
│   ├── Element         // 공통 UI
│   ├── Report          // 보고서
│   └── Graph           // 그래프
├── constants
├── hooks
├── models
├── modules             // Redux Store
├── pages
├── public
├── styles
├── utils
├── tsconfig.json
├── next.config.js
├── package.json
├── yarn.lock
└── README.md
```

## 6. 커밋 컨벤션

### 1. 브랜치 이름 컨벤션

```
Feature/[기능요약]

- 맨 첫글자 F만 대문자로, 기능요약은 소문자로 작성합니다.
- 띄어쓰기는 하이픈으로 구분합니다.

ex) Feature/modal-publishing
```

### 2. 커밋 메세지 컨벤션

```
<태그>: <제목>

- 태그의 첫글자는 대문자로 작성합니다.
- 태그는 아래에 적힌 것들만 사용합니다.

Feat: 새로운 기능 추가, 기능 로직 변경
Fix: 버그 수정
Refactor: 코드 리팩토링 (기능 변화 X)
Style: 코드 포맷팅, 코드 변경이 없는 경우
Chore: 빌드 업무 수정, 패키지 매니저 수정
Docs: 문서 수정, 주석
```
