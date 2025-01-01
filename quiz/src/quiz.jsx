import React, { useState, useEffect } from 'react';
import './css/quiz.css';

function Quiz() {
    const tags = ["Soru 1)", "Soru 2)", "Soru 3)", "Soru 4)", "Soru 5)", "Soru 6)", "Soru 7)", "Soru 8)", "Soru 9)", "Soru 10)"];
    const sorular = [
        "Türk bayrağındaki ay ve yıldızın hangi mitolojik figürle ilişkili olduğu kabul edilir?",
        "Dünyanın en büyük okyanusu hangisidir?",
        "Birleşmiş Milletler'in merkezi hangi şehirde yer almaktadır?",
        "Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı kimdir?",
        "Hangi gezegen Güneş Sistemi'ndeki en büyük gezegendir?",
        "1957'de Sputnik 1'in uzaya gönderilmesi hangi ülke tarafından gerçekleştirilmiştir?",
        "Büyükçekmece Gölü Türkiye'nin hangi ilinde yer almaktadır?",
        "Hangisi ünlü İngiliz yazar William Shakespeare'in eserlerinden birisidir?",
        "Hangi organ vücudun en büyük organıdır?",
        "Türkiye'nin en yüksek dağı hangisidir?"
    ];
    const cevaplar = [
        "Ay Tanrıçası Selene",
        "Pasifik Okyanusu",
        "New York",
        "Mustafa Kemal Atatürk",
        "Jüpiter",
        "Sovyetler Birliği",
        "İstanbul",
        "Hamlet",
        "Cilt",
        "Ağrı Dağı"
    ];
    const şıklar = [
        ["Ay Tanrıçası Selene", "Zeytin Tanrıçası Athena", "Kader Tanrısı Moira", "Aşk Tanrıçası Afrodit"],
        ["Pasifik Okyanusu", "Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu"],
        ["New York", "Paris", "Viyana", "Cenevre"],
        ["Mustafa Kemal Atatürk", "İsmet İnönü", "Recep Tayyip Erdoğan", "Mehmet Akif Ersoy"],
        ["Jüpiter", "Satürn", "Mars", "Venüs"],
        ["Sovyetler Birliği", "Amerika Birleşik Devletleri", "Çin", "Fransa"],
        ["İstanbul", "Antalya", "İzmir", "Bursa"],
        ["Hamlet", "Romeo ve Juliet", "Macbeth", "Otello"],
        ["Cilt", "Beyin", "Karaciğer", "Mide"],
        ["Ağrı Dağı", "Erciyes Dağı", "Kaçkar Dağı", "Göller Yüksekliği"]
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(tags.length).fill(null));
    const [quizFinished, setQuizFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180);
    const [quizStarted, setQuizStarted] = useState(false);

    const checkAnswerStatus = (index) => {
        if (selectedAnswers[index] === null) {
            return "empty"; // Boş cevap
        }
        return selectedAnswers[index] === cevaplar[index] ? "correct" : "incorrect";
    };

    useEffect(() => {
        if (quizStarted && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [quizStarted, timeLeft]);

    const handleAnswerClick = (selectedOption) => {
        if (quizFinished) return;
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = selectedOption;
        setSelectedAnswers(updatedAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < tags.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const handleBackQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleFinishQuiz = () => {
        setQuizFinished(true);
    };

    const calculateResult = () => {
        let correct = 0, incorrect = 0, unanswered = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === null) {
                unanswered++;
            } else if (answer === cevaplar[index]) {
                correct++;
            } else {
                incorrect++;
            }
        });
        return { correct, incorrect, unanswered };
    };

    const { correct, incorrect, unanswered } = calculateResult();

    return (
        <div className="Body">
            {!quizStarted ? (
                <div className="StartQuiz">
                    <h1>Quize</h1>
                    <button
                        className="StartButton"
                        onClick={() => setQuizStarted(true)}
                    >
                        Başla
                    </button>
                </div>
            ) : (
                <div className="cardBody1">
                    {quizStarted && !quizFinished && timeLeft > 0 && (
                        <div className="TimeLeft">
                            Kalan Süre: {timeLeft}s
                        </div>
                    )}
                    {timeLeft === 0 && !quizFinished && (
                        <div className="TimeUpMessage">
                            {confirm("Süre Doldu Tekrar Denemek İster misiniz ?")}
                        </div>
                    )}
                    <hr />

                    {!quizFinished ? (
                        <>
                            <div className="Header">
                                <div className="Head">
                                    <span className="Tag">{tags[currentQuestionIndex]}</span>
                                </div>
                                <div className="quest">
                                    <span>{sorular[currentQuestionIndex]}</span>
                                </div>
                            </div>
                            <hr className="siyah-hr" />
                            <div className="questionBody">
                                {şıklar[currentQuestionIndex].map((option, index) => (
                                    <div
                                        key={index}
                                        className={`Question ${selectedAnswers[currentQuestionIndex] === option ? 'selected' : ''}`}
                                        onClick={() => handleAnswerClick(option)}
                                    >
                                        <span>{`${String.fromCharCode(65 + index)})`}</span><p>{option}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="NavigationButtons">
                                <button
                                    className="GeriButon"
                                    onClick={handleBackQuestion}
                                    disabled={currentQuestionIndex === 0}
                                >
                                    Geri
                                </button>
                                <button className="İleriButon" onClick={handleNextQuestion}>
                                    {currentQuestionIndex === tags.length - 1 ? "Yarışmayı Bitir" : "Sonraki Soru"}
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="Result">
                            <h2>Yarışma Sonuçları</h2>
                            <ul>
                                {tags.map((tag, index) => {
                                    const answerStatus = checkAnswerStatus(index); // Burada checkAnswerStatus kullanılacak
                                    return (
                                        <li key={index} className={answerStatus}>
                                            <span>{tag}</span> - Doğru Cevap: {cevaplar[index]}<br />
                                            <span>Yanıtınız: {selectedAnswers[index] || 'Cevap Seçilmedi'}</span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="ResultStats">
                                <p>Doğru Sayısı: {correct}</p>
                                <p>Yanlış Sayısı: {incorrect}</p>
                                <p>Boş Sayısı: {unanswered}</p>
                            </div>
                            <button
                                className="FinishButton"
                                onClick={() => {
                                    setSelectedAnswers(Array(tags.length).fill(null));
                                    setQuizFinished(false);
                                    setTimeLeft(180);
                                    setCurrentQuestionIndex(0);
                                    setQuizStarted(false);
                                }}
                            >
                                Tekrar Başla
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Quiz;
