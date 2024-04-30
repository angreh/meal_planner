FROM golang:1.22.2

RUN go install github.com/cosmtrek/air@latest

WORKDIR /src

COPY go.mod .
COPY go.sum .
RUN go mod download

COPY . .

EXPOSE 8080

CMD ["air"]