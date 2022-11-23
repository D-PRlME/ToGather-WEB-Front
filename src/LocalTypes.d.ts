export interface TagListResponse {
  tags: {
    name: string;
    image_url: string;
  }[];
}
export interface IDetailPost {
  post_id: number;
  title: string;
  user: {
    user_id: number;
    user_name: string;
    profile_image_url: string;
  };
  created_at: string;
  tags: [
    {
      name: string;
      image_url: string;
    }
  ];
  is_finished: boolean;
  like_count: number;
}

export interface PostsListResponse {
  post_list: IDetailPost[];
}

export interface ISelectTags {
  [key: string]:
    | "SPRING_BOOT"
    | "MYSQL"
    | "BACKEND"
    | "NODE_JS"
    | "REACT"
    | "FRONTED"
    | "VUE_JS"
    | "SWIFT"
    | "JAVA"
    | "JAVASCRIPT";
}

export interface DetailPostResponse {
  post_id: number;
  title: string;
  user: {
    user_id: number;
    user_name: string;
    profile_image_url: string;
  };
  created_at: string;
  tag: [
    {
      name: string;
      image_url: string;
    }
  ];
  content: string;
  is_mine: boolean;
  is_completed: boolean;
  is_liked: number;
  like_count: number;
}
export interface IProfileData {
  user_id: number;
  name: string;
  email: string;
  profile_image_url: string;
  introduce: string;
  positions: string[];
}

interface IFormStates {
  name: string;
  email: string;
  positions: string;
  introduce: string;
}

export interface IUserProfile extends IFormStates {
  user_id: number;
  profile_image_url: string;
  img_src: string;
}
export interface IEditFormStates {
  title: string;
  content: string;
  tags: ISelectTags;
}
