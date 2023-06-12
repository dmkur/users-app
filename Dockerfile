# завантаживо та налайштуймо наш образ
FROM node:18-alpine
# образ node, alpine - обрізана версія
# менше місця менше вартість

MAINTAINER dmkur
# оск ми трішки змінюємо образ для цього потр. MAINTAINER
# dmkur - нова назва

RUN mkdir /app
# виконати створення папки, app - назва

WORKDIR /app
# вказали робочу папку

COPY ./backend/package.json /app
# скпіювали файл package.json у папку /app

RUN npm i --production
# відключає встановлення дев залежностей з package.json
