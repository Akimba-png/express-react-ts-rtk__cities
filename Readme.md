# Мультистраничное SPA приложение с проверкой авторизации

Сервис для путешественников по выбору арендуемого жилья.  
Выбирайте один из шести популярных городов, применяйте сортировку  
и получайте актуальный список предложений синхронизированный с интерактивной картой.  
Для каждого предложения доступна отдельная страница с описанием,  
а для зарегистрированных пользователей доступен просмотр избранных предложений.  
Общее кол-во страниц в сервисе - 5

## Проект создан с использованием связки React-RTK-Typescript-Jest  

## Технологический стек:
- React;
- Typescript;
- Redux RTK Reselect Thunk (+ custom middleware);
- React Router v6 (приватный маршрут);
- Axios (с применением интерсепторов);
- Leaflet;
- Jest;
- React Testing Library;

## Используемые паттерны:
- Паттерн адаптер - адаптация получаемых с сервера данных;
- Прокси паттерн - стилизация компонентов в зависимости от места использования;
- Кастомные хуки:
  - Запросы к серверу;
  - Обработка и валидация полей форм;
- В проекте рассмативаются различные техники подключения компонента к store:
  - HOC connect;
  - useSelector, useDispatch;
- Используются 3-ри варианта создания reducer:
  - switch / case оператор;
  - createReducer;
  - createSlice;

## Сценарии:

### Запуск проекта:

```bash
npm start
```

### Запуск тестов:

```bash
npm test
```

## Проект развёрнут по адресу:
https://ts-cities.web.app  
_Проект не адаптирован для мобильных устройтв._  
_Рекомендуется просмотр на десктопе._
