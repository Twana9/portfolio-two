import {
  Absorption,
  Diffusion,
  Extraction,
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
} from "../assets/semester5";

const unit = {
  id: 1,
  name: "unit",
  Absorption: Absorption,
  Diffusion: Diffusion,
  Extraction: Extraction,
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
export { unit, reactor, lab3a, industry };
