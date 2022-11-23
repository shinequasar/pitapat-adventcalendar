export type ResponseData<T> = {
  body: {
    status: string;
    message: string;
    data: T;
  };
};

// Member types ------------------------------------
export interface MemberData {
  id: string;
  nickname: string;
  profileImageURL: string;
  email: string;
  invitationLink: string;
}


// Friends types ------------------------------------
export interface FriendsData {
    memberId: string;
    friendId: string;
    uuid: string;
    profileImgUrl: string;
    name: string;
    allowedMsg: boolean;
    isFavorite: boolean;
}

export interface postPresentData {
  receiverId: number;
  nickname: string;
  title: string;
  contents?: string;
  receivedDate: string;
  isAnonymous: boolean;
  multipartFileList?: string[]; // TODO : 형식 체크
}
