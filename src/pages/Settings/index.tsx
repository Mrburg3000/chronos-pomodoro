import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { useEffect, useState } from "react";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskAction";

export function Settings() {
  const { state, dispatch } = useTaskContext();

  const [workTime, setWorkTime] = useState<number>(state.config.workTime);
  const [shortBreakTime, setShortBreakTime] = useState<number>(state.config.shortBreakTime);
  const [longBreakTime, setLongBreakTime] = useState<number>(state.config.longBreakTime);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    showMessage.dismiss();

    const formErrors = [];
    const workTimeFromForm = Number(workTime);
    const shortBreakTimeFromForm = Number(shortBreakTime);
    const longBreakTimeFromForm = Number(longBreakTime);

    if (
      isNaN(workTimeFromForm) ||
      isNaN(shortBreakTimeFromForm) ||
      isNaN(longBreakTimeFromForm)
    ) {
      formErrors.push("Digite apenas números para TODOS os campos");
    }

    if (workTimeFromForm < 1 || workTimeFromForm > 99) {
      formErrors.push("Digite valores entre 1 e 99 para foco");
    }

    if (shortBreakTimeFromForm < 1 || shortBreakTimeFromForm > 30) {
      formErrors.push("Digite valores entre 1 e 30 para descanso curto");
    }

    if (longBreakTimeFromForm < 1 || longBreakTimeFromForm > 60) {
      formErrors.push("Digite valores entre 1 e 60 para descanso longo");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime: workTimeFromForm,
        shortBreakTime: shortBreakTimeFromForm,
        longBreakTime: longBreakTimeFromForm,
      },
    });
    showMessage.success("Configurações salvas!");
  }

  useEffect(() => {
    document.title = "Configurações - Chronos Pomodoro";
  }, []);

  useEffect(() => {
    setWorkTime(state.config.workTime);
    setShortBreakTime(state.config.shortBreakTime);
    setLongBreakTime(state.config.longBreakTime);
  }, [state.config]);

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText="Foco"
              value={workTime}
              onChange={(e) => setWorkTime(Number(e.target.value))}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              value={shortBreakTime}
              onChange={(e) => setShortBreakTime(Number(e.target.value))}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo"
              value={longBreakTime}
              onChange={(e) => setLongBreakTime(Number(e.target.value))}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
