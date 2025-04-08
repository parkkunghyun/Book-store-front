function getImgUrl (name) {
    return new URL(`../assets/books/${name}`, import.meta.url);
}

export {getImgUrl};
// 상대경로 기준이 import.meta.url → 즉, 현재 JS 파일 위치 기준으로 경로를 만들어줘.
// /src/assets/books/book1.png