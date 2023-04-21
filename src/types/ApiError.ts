import { HttpStatus } from './HttpStatus'

export interface ApiFieldError {
	Field: string
	Description: string[]
}

export interface ApiError {
	errors?: Map<string, string>
	status: HttpStatus
	type?: string
	title: string
	traceId?: string
}
