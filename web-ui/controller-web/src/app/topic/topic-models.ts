export interface TopicModel {
    id: string,
    name: string,
    status?: string,
    update?: string
}

export interface TopicUpdateRequest {
    subject: string,
    topic?: string,
    timestamp?: number,
    value?: string
}
