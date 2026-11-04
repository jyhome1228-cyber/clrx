# CLRX Official Website

CLRX 프리미엄 두피·피부 케어 브랜드 홈페이지 1차 구축.

## 실행
별도 빌드 과정 없이 `index.html`을 브라우저에서 열거나 GitHub Pages로 배포합니다. GitHub Pages가 아직 활성화되지 않았다면 저장소 **Settings → Pages → Deploy from a branch → main / (root)** 를 설정합니다.

## 브랜드 기준
- 브랜드명: **CLRX**
- 기술 표기: **CTSol-CLRX™** (별도 검증자료와 연결 시 구분)
- 로고: 사용자 제공 원본 SVG, 실버 `#DEDFE3`
- 디자인: 네이비 배경 / 블랙 제품 용기 / 실버 메탈 연출
- 주요 메뉴: BRAND / TECHNOLOGY / PRODUCTS / SCIENCE / CONTACT
- S-Series: S-01 Micro-Prep Purifier / S-02 Scalp Lock-in Tonic / S-02a Scalp Lock-in Ampoule
- P-Series, B-Series: 향후 개발 및 출시 계획으로 구분

## 콘텐츠·디자인 QA 대기
1. 메인 및 제품 이미지는 **실제 제품 사진이 아닌 CSS 콘셉트 그래픽**. 확정 용기·라벨을 제공받으면 교체.
2. 제품별 최종 용량, 전성분, 기능성 표시, 제조·판매 정보 확인 후 개별 상세페이지 작업.
3. IR 내 CTSF / K-CELL COMPLEX와 CTSol-CLRX™의 관계 및 임상·비임상 문구 승인 후 SCIENCE 상세 추가.
4. 기업 푸터 소재는 **kaisuncell.com**에 공개된 정보를 2026-11-04 기준으로 확인하여 반영. 홈페이지 공개 전 최신 사업자 정보 재확인.
5. 한국어 우선 1차 구조. 영문 전환 기능은 아직 미구현(단순 표시로 오인하지 않도록 헤더에는 KR만 표기).
6. 개인정보처리방침/이용약관은 실 링크 확보 뒤 추가.
7. 문의는 기존 카이선셀 사이트 및 공개 대표 이메일에 연결. 실제 문의 폼 및 관리자 저장 기능은 미구현.

## 기술
HTML / CSS / Vanilla JavaScript. 외부 서버 없이 정적 호스팅 가능.
