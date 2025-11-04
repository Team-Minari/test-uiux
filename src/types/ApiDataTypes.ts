// 상품 목록을 조회 및 검색하기 위한 데이터 타입입니다.
export interface Product {
	id: string;
	name: string;
	price: number;
	imageUrl: string | null;
}
