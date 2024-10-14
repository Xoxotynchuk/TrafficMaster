import { useContext, useState } from "react";
import { GlobalContext } from "../store/GlobalContext";
import Header from "../Header";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


function CreateTaskScreen() {
    // const [currentForm, setCurrentForm] = useState("");

    // const { setStatus } = useContext(GlobalContext);

    const [currentStep, setCurrentStep] = useState(0);
    const [links, setLinks] = useState([]);
    const [firstLink, setFirstLink] = useState("");
    const [pfCount, setPfCount] = useState("");
    const [timeStart, setTimeStart] = useState("");

    const [timePause, setTimePause] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [countDay, setCountDay] = useState("");

    // Ползунок
    const [contacts, setContacts] = useState(100);

    const handleRangeChange = (e) => {
        setContacts(e.target.value);
    };


    // Быстрый доступ к кол-ву ПФ
    const handlePfCountClick = (count, e) => {
        e.preventDefault()
        setPfCount(count);
    };

    // Быстрый доступ к дате старта
    const handleDateStart = (count, e) => {
        e.preventDefault()
        if (count === "Сегодня") {
            const today = new Date();
            const formattedDate = today.toISOString().slice(0, 10);
            setDateStart(formattedDate)
        }
        if (count === "Завтра") {
            const today = new Date();
            const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
            const formattedDate = tomorrow.toISOString().slice(0, 10);
            setDateStart(formattedDate)
        }
        // setDateStart(count);
    };

    // Быстрый доступ к количеству дней накрутки
    const handleCountDay = (count, e) => {
        e.preventDefault()
        setCountDay(count);
    };

    // Быстрый доступ к времени паузы
    const handleTimePause = (count, e) => {
        e.preventDefault()
        setTimePause(count);
    };

    // Быстрый доступ к времени старта
    const handleTimeStart = (count, e) => {
        e.preventDefault()
        if (!(count === "currentTime")) {
            setTimeStart(count);
        } else {
            const currentTime = new Date

            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();

            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            setTimeStart(formattedTime)
        }

    };

    // Следующая страница
    const handleNextStep = (e) => {
        e.preventDefault()
        const inputs = document.querySelectorAll('input');
        let allInputsFilled = true;

        inputs.forEach(element => {
            if (!element.value.trim()) {
                allInputsFilled = false;
                return; // Выходим из цикла, если хотя бы один инпут пустой
            }
        });

        if (allInputsFilled) {
            if (currentStep <= 6) {
                setCurrentStep(currentStep + 1);
            }
        } else {
            alert("Заполни все инпуты");
        }

    };

    // Предыдущая страница
    const handlePreviousStep = (e) => {
        e.preventDefault()
        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Добавление новых ипнутов
    const handleAddLink = (e) => {
        e.preventDefault()
        if (links.length <= 8) {
            setLinks([...links, '']);
        }
    };

    // Обновление количества инпутов
    const handleLinkChange = (index, value) => {
        const newLinks = [...links];
        newLinks[index] = value;
        setLinks(newLinks);
    };

    // Получение значения первой ссылки
    const handleFirstLinkChange = () => {
        const firstLink = document.querySelector('input[name="firstLink"]').value
        setFirstLink(firstLink);
    };

    // Удаление инпутов
    const handleRemoveLink = (index) => {
        const newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
    };

    // Полоска прогрессбара
    let percentage = 0;

    if (currentStep === 0) {
        percentage = 12.5
    }
    if (currentStep === 1) {
        percentage = 25
    }
    if (currentStep === 2) {
        percentage = 37.5
    }
    if (currentStep === 3) {
        percentage = 50
    }
    if (currentStep === 4) {
        percentage = 62.5
    }
    if (currentStep === 5) {
        percentage = 75
    }
    if (currentStep === 6) {
        percentage = 87.5
    }
    if (currentStep === 7) {
        percentage = 100
    }

    // Отправка формы
    const submitForm = (e) => {
        e.preventDefault()
        const data = {
            pfCount: pfCount,
            contacts: contacts,
            links: links.concat(firstLink),
            timeStart: timeStart,
            timePause: timePause,
            dateStart: dateStart,
            countDay: countDay
        }
        console.log(data);
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="component create-task__progressbar">
                    {currentStep >= 1 && (
                        <svg onClick={handlePreviousStep} width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4646 22.9937C13.8074 22.6695 14 22.2297 14 21.7712C14 21.3127 13.8074 20.873 13.4646 20.5487L4.41359 11.9896L13.4646 3.43037C13.7977 3.10426 13.982 2.66747 13.9778 2.2141C13.9737 1.76073 13.7814 1.32704 13.4424 1.00645C13.1033 0.685853 12.6447 0.504005 12.1653 0.500066C11.6859 0.496126 11.224 0.670412 10.8791 0.985387L0.535358 10.7671C0.192568 11.0913 -5.23179e-07 11.5311 -5.03137e-07 11.9896C-4.83095e-07 12.4481 0.192568 12.8878 0.535358 13.2121L10.8792 22.9937C11.222 23.3179 11.687 23.5 12.1719 23.5C12.6567 23.5 13.1217 23.3179 13.4646 22.9937Z" fill="#7387EA" />
                        </svg>
                    )}
                    {currentStep === 0 && (
                        <div></div>
                    )}
                    {currentStep === 0 && (
                        <h2>Создать задачу</h2>
                    )}
                    {currentStep === 1 && (
                        <h2>Количество ПФ</h2>
                    )}
                    {currentStep === 2 && (
                        <h2>Процент контактов</h2>
                    )}
                    {currentStep === 3 && (
                        <h2>Время старта</h2>
                    )}
                    {currentStep === 4 && (
                        <h2>Время паузы</h2>
                    )}
                    {currentStep === 5 && (
                        <h2>Дата старта</h2>
                    )}
                    {currentStep === 6 && (
                        <h2>Кол-во дней накрутки</h2>
                    )}
                    {currentStep === 7 && (
                        <h2>Подтверждение данных</h2>
                    )}

                    <div className="CircularProgressbar-container">
                        <CircularProgressbar
                            value={percentage}
                            styles={buildStyles({
                                // Цвет прогресс-бара
                                pathColor: `#7387EA`,
                                // Цвет фона
                                trailColor: 'B9C3F5',
                                pathTransitionDuration: 0.5,
                            })}
                        />
                        <div>
                            <p>{currentStep + 1} / 8</p>
                        </div>
                    </div>

                </div>
                <form action="" className="create-task">
                    {currentStep === 0 && (
                        <div className="create-task__item">
                            <div className="component create-task__item create-task__links">
                                <p>Вставьте ссылки на объявления (до 10)</p>
                                <div className="create-task__links_list">
                                    <input type="text" placeholder="Ссылка" name="firstLink" value={firstLink} onChange={handleFirstLinkChange} />
                                    {links.map((link, index) => (
                                        <div key={index} className="input-double">
                                            <input
                                                type="text"
                                                placeholder="Ссылка"
                                                value={link}
                                                onChange={(e) => handleLinkChange(index, e.target.value)}
                                            />
                                            <div className="button-square" onClick={() => handleRemoveLink(index)}>
                                                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 1.16667H12.1133L11.0028 0H5.45041L4.33993 1.16667H0.453247V3.5H16M1.56373 18.6667C1.56373 19.2855 1.79772 19.879 2.21423 20.3166C2.63074 20.7542 3.19566 21 3.78469 21H12.6685C13.2576 21 13.8225 20.7542 14.239 20.3166C14.6555 19.879 14.8895 19.2855 14.8895 18.6667V4.66667H1.56373V18.6667Z" fill="#FF5768" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {links.length <= 8 && (
                                    <button name="addInput" onClick={handleAddLink}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 6H10V2C10 1.46957 9.78929 0.960859 9.41421 0.585786C9.03914 0.210714 8.53043 0 8 0C7.46957 0 6.96086 0.210714 6.58579 0.585786C6.21071 0.960859 6 1.46957 6 2L6.071 6H2C1.46957 6 0.960859 6.21071 0.585786 6.58579C0.210714 6.96086 0 7.46957 0 8C0 8.53043 0.210714 9.03914 0.585786 9.41421C0.960859 9.78929 1.46957 10 2 10L6.071 9.929L6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14V9.929L14 10C14.5304 10 15.0391 9.78929 15.4142 9.41421C15.7893 9.03914 16 8.53043 16 8C16 7.46957 15.7893 6.96086 15.4142 6.58579C15.0391 6.21071 14.5304 6 14 6Z" fill="#7387EA" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <button onClick={handleNextStep} className="button-default">Далее</button>
                        </div>
                    )}

                    {currentStep === 1 && (
                        <div className="create-task__item">
                            <div className="component create-task__item create-task__countPF">
                                <p>Укажите количество ПФ на объявление в день (до 100)</p>
                                <input type="text" placeholder="Количество ПФ на объявление в день" value={pfCount}
                                    onChange={(e) => setPfCount(e.target.value)} />
                                <div className="buttons-list">
                                    <button onClick={(e) => handlePfCountClick('30', e)}>30</button>
                                    <button onClick={(e) => handlePfCountClick('40', e)}>40</button>
                                    <button onClick={(e) => handlePfCountClick('50', e)}>50</button>
                                    <button onClick={(e) => handlePfCountClick('100', e)}>100</button>
                                </div>
                            </div>
                            <button onClick={handleNextStep} className="button-default">Далее</button>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="create-task__item">
                            <div className="component create-task__item create-task__countPF">
                                <p>Процент контактов (рекомендуем 100%)</p>
                                <div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={contacts}
                                        step="1"
                                        onChange={handleRangeChange}
                                    />
                                </div>
                                <div className="range-text">
                                    <p>0%</p>
                                    <h2>{contacts}%</h2>
                                    <p>100%</p>
                                </div>
                            </div>
                            <button onClick={handleNextStep} className="button-default">Далее</button>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="create-task__item">
                            <div className="component create-task__item create-task__timeStart">
                                <input type="time" placeholder="Время старта" value={timeStart}
                                    onChange={(e) => setTimeStart(e.target.value)} />
                                <button onClick={(e) => handleTimeStart('currentTime', e)}>Сейчас</button>
                                <div className="buttons-list">
                                    <button onClick={(e) => handleTimeStart('00:00', e)}>0:00</button>
                                    <button onClick={(e) => handleTimeStart('06:00', e)}>6:00</button>
                                    <button onClick={(e) => handleTimeStart('09:00', e)}>9:00</button>
                                    <button onClick={(e) => handleTimeStart('12:00', e)}>12:00</button>
                                    <button onClick={(e) => handleTimeStart('16:00', e)}>16:00</button>
                                    <button onClick={(e) => handleTimeStart('18:00', e)}>18:00</button>
                                </div>
                            </div>
                            <button onClick={handleNextStep} className="button-default">Далее</button>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="create-task__item">
                            <div className="component create-task__item create-task__timePause">
                                <input type="text" placeholder="Время паузы (в минутах)" value={timePause}
                                    onChange={(e) => setTimePause(e.target.value)} />
                                <div className="buttons-list">
                                    <button onClick={(e) => handleTimePause('Без паузы', e)}>Без паузы</button>
                                    <button onClick={(e) => handleTimePause('Авто', e)}>Авто</button>
                                </div>
                            </div>
                            <button onClick={handleNextStep} className="button-default">Далее</button>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="create-task__item">
                            <div className="component create-task__item create-task__timePause">
                                <input type="date" placeholder="Дата старта" value={dateStart}
                                    onChange={(e) => setDateStart(e.target.value)} />
                                <div className="buttons-list">
                                    <button onClick={(e) => handleDateStart('Сегодня', e)}>Сегодня</button>
                                    <button onClick={(e) => handleDateStart('Завтра', e)}>Завтра</button>
                                </div>
                            </div>
                            <button onClick={handleNextStep} className="button-default">Далее</button>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div className="create-task__item">
                            <div className="component create-task__item create-task__countDay">
                                <input type="text" placeholder="Дата старта" value={countDay}
                                    onChange={(e) => setCountDay(e.target.value)} />
                                <div className="buttons-list">
                                    <button onClick={(e) => handleCountDay('7', e)}>7</button>
                                    <button onClick={(e) => handleCountDay('15', e)}>15</button>
                                    <button onClick={(e) => handleCountDay('30', e)}>30</button>
                                </div>
                            </div>
                            <button onClick={handleNextStep} className="button-default">Далее</button>
                        </div>
                    )}

                    {currentStep === 7 && (
                        <div className="create-task__item create-task__confirmationData">
                            <div className="component create-task__item">
                                <div className="create-task__item-title">
                                    <h2>Задача 1</h2>
                                    <p>01.01.2024</p>
                                </div>
                                <div className="create-task__item-links__list">
                                    <a href="https://www.avito.ru/sankt-peterburg/posuda_i_tovary_dlya_kuhni/kruzhka_pivnaya_0.5l_sssr_4316649957">
                                        {firstLink}
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.974971 0.264138C0.796124 0.433317 0.695654 0.662742 0.695654 0.901961C0.695654 1.14118 0.796124 1.37061 0.974971 1.53978L5.69726 6.00545L0.974971 10.4711C0.801193 10.6413 0.705035 10.8691 0.707209 11.1057C0.709382 11.3422 0.809713 11.5685 0.986592 11.7358C1.16347 11.903 1.40274 11.9979 1.65288 12C1.90301 12.002 2.144 11.9111 2.32392 11.7468L7.72068 6.64327C7.89953 6.47409 8 6.24467 8 6.00545C8 5.76623 7.89953 5.5368 7.72068 5.36762L2.32392 0.264138C2.14502 0.0950105 1.90241 -2.66534e-07 1.64945 -2.77591e-07C1.39648 -2.88649e-07 1.15387 0.0950104 0.974971 0.264138Z" fill="white" />
                                        </svg>
                                    </a>
                                    {links.map((item) => (
                                        <a href="https://www.avito.ru/sankt-peterburg/posuda_i_tovary_dlya_kuhni/kruzhka_pivnaya_0.5l_sssr_4316649957">
                                            {item}
                                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.974971 0.264138C0.796124 0.433317 0.695654 0.662742 0.695654 0.901961C0.695654 1.14118 0.796124 1.37061 0.974971 1.53978L5.69726 6.00545L0.974971 10.4711C0.801193 10.6413 0.705035 10.8691 0.707209 11.1057C0.709382 11.3422 0.809713 11.5685 0.986592 11.7358C1.16347 11.903 1.40274 11.9979 1.65288 12C1.90301 12.002 2.144 11.9111 2.32392 11.7468L7.72068 6.64327C7.89953 6.47409 8 6.24467 8 6.00545C8 5.76623 7.89953 5.5368 7.72068 5.36762L2.32392 0.264138C2.14502 0.0950105 1.90241 -2.66534e-07 1.64945 -2.77591e-07C1.39648 -2.88649e-07 1.15387 0.0950104 0.974971 0.264138Z" fill="white" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                                <div className="create-task__item-parameters__list">
                                    <div className="create-task__item-parameters__item">
                                        <p>Количество ПФ</p>
                                        <div className="line"></div>
                                        <h3>{pfCount} ПФ</h3>
                                    </div>
                                    <div className="create-task__item-parameters__item">
                                        <p>Процент контактов</p>
                                        <div className="line"></div>
                                        <h3>{contacts}%</h3>
                                    </div>
                                    <div className="create-task__item-parameters__item">
                                        <p>Время старта</p>
                                        <div className="line"></div>
                                        <h3>{timeStart}</h3>
                                    </div>
                                    <div className="create-task__item-parameters__item">
                                        <p>Пауза</p>
                                        <div className="line"></div>
                                        <h3>{timePause}</h3>
                                    </div>
                                    <div className="create-task__item-parameters__item">
                                        <p>Дата старта</p>
                                        <div className="line"></div>
                                        <h3>{dateStart}</h3>
                                    </div>
                                    <div className="create-task__item-parameters__item">
                                        <p>Дней работы </p>
                                        <div className="line"></div>
                                        <h3>{countDay}</h3>
                                    </div>
                                </div>
                            </div>
                            <h2 className="component">Итоговая цена: 6352 руб.</h2>
                            <div className="buttons-list">
                                <button className="button-default" onClick={submitForm}>Принять</button>
                                <button className="button-default button-red">Отказаться</button>
                            </div>
                        </div>
                    )}

                </form>
            </div>
        </div>
    );
}

export default CreateTaskScreen;
