// 상품 목록을 조회 및 검색하기 위한 데이터 타입입니다.
export interface Product {
	id: string;
	name: string;
	price: number;
	imageUrl: string | null;
}

// 장바구니에 담긴 아이템 정보를 나타내는 인터페이스
export interface CartItem extends Product {
	quantity: number;
}