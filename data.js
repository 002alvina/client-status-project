const clients = [
    { accountId: 1, lastName: 'Иванов', firstName: 'Иван', patronymic: 'Иванович', birthDate: '1980-01-15', inn: '123456789012', responsible: 'Петров Петр Петрович', status: 'Не в работе' },
    { accountId: 2, lastName: 'Смирнова', firstName: 'Мария', patronymic: 'Сергеевна', birthDate: '1992-04-20', inn: '234567890123', responsible: 'Сидоров Сидор Сидорович', status: 'Не в работе' },
    { accountId: 3, lastName: 'Кузнецов', firstName: 'Александр', patronymic: 'Алексеевич', birthDate: '1985-07-11', inn: '345678901234', responsible: 'Иванов Иван Иванович', status: 'Не в работе' },
    { accountId: 4, lastName: 'Петров', firstName: 'Дмитрий', patronymic: 'Викторович', birthDate: '1990-12-03', inn: '456789012345', responsible: 'Смирнова Мария Сергеевна', status: 'Не в работе' },
    { accountId: 5, lastName: 'Волкова', firstName: 'Елена', patronymic: 'Михайловна', birthDate: '1988-09-25', inn: '567890123456', responsible: 'Кузнецов Александр Алексеевич', status: 'Не в работе' }
  ];
  
  const users = [
    { fio: 'Петров Петр Петрович', login: 'ppetrov', password: 'pass1234' },
    { fio: 'Сидоров Сидор Сидорович', login: 'ssidorov', password: 'sidorov78' },
    { fio: 'Иванов Иван Иванович', login: 'iivanov', password: 'ivanov56' },
    { fio: 'Смирнова Мария Сергеевна', login: 'msmirnova', password: 'marusya89' },
    { fio: 'Кузнецов Александр Алексеевич', login: 'akuznetsov', password: 'alex2000' }
  ];
  
  module.exports = { clients, users };
  
