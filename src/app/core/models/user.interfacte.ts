export interface UserI{
    id:number
    first_name:string
    last_name:string
    avatar: string
}

export interface Support {
    url: string;
    text: string;
}

export interface RootObject {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserI[];
    support: Support;
}