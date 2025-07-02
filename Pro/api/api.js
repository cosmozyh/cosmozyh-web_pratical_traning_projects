import http from "./http"

export const getBanner = () => {
	return http('/user/getBanner')
}