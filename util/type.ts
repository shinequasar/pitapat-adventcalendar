declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageview = (url) => {
  if (typeof window !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export type ResponseData<T> = {
  status: string;
  message: string;
  data: T;
};

// Member types ------------------------------------
export interface MemberData {
  member: {
    id: string;
    nickname: string;
    profileImageURL: string;
    email: string;
    invitationLink: string;
    setting: {
      id: number;
      isAlert: boolean;
      bgm: boolean;
      fcmtokens: string;
    };
  }
}

export interface NewMemberData {
  dateCount: number;
  member: {
    id: string;
    nickname: string;
    profileImageURL: string;
    email: string;
    invitationLink: string;
    setting: {
      id: number;
      isAlert: boolean;
      bgm: boolean;
      fcmtokens: string;
    };
  }
  presentCount: number;
}


export interface PutMemberData {
  nickname: string;
  profileImageURL: string;
  statusMessage: string;
}

export const defaultMemberData = {
  dateCount: -1,
  member : {
    id: "",
    nickname: "",
    profileImageURL: "",
    email: "",
    invitationLink: "",
    setting: {
      id: -1,
      isAlert: false,
      bgm: false,
      fcmtokens: "",
    },
  },
  presentCount: -1
};

// Friends types ------------------------------------
export interface FriendsData {
  id: number;
  nickname: string;
  profileImageURL: string;
  email: string;
  invitationLink: string;
  setting: {
    id: number;
    isAlert: boolean;
    bgm: boolean;
    fcmtokens: string;
  };
}

// Present types ------------------------------------
export interface postPresentData {
  receiverId: number;
  nickname: string;
  title: string;
  contents?: string;
  receivedDate: string;
  isAnonymous: boolean;
  multipartFileList?: string[]; // TODO : 형식 체크
}

export interface presentDetail {
  id: number;
  receiverId: number;
  senderId: number;
  nickname: string;
  isAnonymous: boolean;
  isPublic: boolean;
  title: string;
  contents: string;
  imageURL: [];
  receivedDate: string;
  isRead: boolean;
}
// Friend Search types

// Setting types ------------------------------------
export interface putPushData {
  alertStatus: boolean;
}
export interface putBGMData {
  bgmStatus: boolean;
}

///
export interface dataProps {
  data: object;
  link: string;
}
