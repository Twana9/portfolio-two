import {
  Absorption,
  Diffusion,
  Liquid,
  Report,
  UnitQuestions,
  Sa7dan,
  UnitXuli2,
  Sheet1,
  Sheet2,
  Sheet3,
  Sheet4,
  ReactorQuestions,
  Heat1,
  Service,
  Solutions,
  BatchReactor,
  IndustryQuestions,
  Heat2025Q,
  HeatMarks,
  HeatSa7dan,
  ModelL1,
  ModelL2,
  ModelL3,
  ModelL4,
  ModelOldQ,
  Model2025Q,
  ModelSa7dan,
  ModelMarks,
} from "../assets/semester5";

const unit = {
  id: 1,
  name: "unit",
  Absorption: Absorption,
  Diffusion: Diffusion,
  Liquid: Liquid,
  Report: Report,
  UnitQuestions,
  Sa7dan: Sa7dan,
  UnitXuli2: UnitXuli2,
};
const reactor = {
  id: 2,
  name: "reactor",
  Sheet1: Sheet1,
  Sheet2: Sheet2,
  Sheet3: Sheet3,
  Sheet4: Sheet4,
  ReactorQuestions: ReactorQuestions,
};
const lab3a = {
  id: 3,
  name: "lab3a",
  Heat1: Heat1,
  Service: Service,
  Solutions: Solutions,
  BatchReactor: BatchReactor,
};
const industry = {
  id: 4,
  name: "industry",
  IndustryQuestions: IndustryQuestions,
};
const heat = {
  id: 5,
  name: "heat",
  Heat2025Q: Heat2025Q,
  HeatMarks: HeatMarks,
  HeatSa7dan,
};
const model = {
  id: 6,
  name: "model",
  ModelL1: ModelL1,
  ModelL2: ModelL2,
  ModelL3: ModelL3,
  ModelL4: ModelL4,
  ModelOldQ: ModelOldQ,
  Model2025Q: Model2025Q,
  ModelSa7dan: ModelSa7dan,
  ModelMarks: ModelMarks,
};
export { unit, reactor, lab3a, industry, heat, model };
