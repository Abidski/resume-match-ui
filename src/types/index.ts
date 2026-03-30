///Taken from Claude
export interface Dimension {
  name: string;
  score: number;
}
export interface AnalyzeResult {
  score: number;
  verdict: string;
  summary: string;
  dimensions: Dimension[];
  matching: string[];
  partial: string[];
  missing: string[];
  suggestions: string[];
}
