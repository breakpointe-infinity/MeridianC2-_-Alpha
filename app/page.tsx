"use client";

import React, { useState, useEffect, useRef } from "react";
import { getImpureNodeId, getImpureCoordinates } from "@/lib/utils";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
interface IconProps {
  size?: number | string;
  className?: string;
  id?: string;
  onClick?: any;
  title?: string;
}

const IconWrapper = ({ 
  children, 
  size = 14, 
  className = "", 
  viewBox = "0 0 24 24",
  onClick,
  id,
  title
}: { 
  children: React.ReactNode; 
  size?: number | string; 
  className?: string; 
  viewBox?: string;
  onClick?: any;
  id?: string;
  title?: string;
}) => (
  <svg
    id={id}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={`inline-block select-none align-middle ${className}`}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
);

const ChevronRight = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polyline points="9 18 15 12 9 6" />
  </IconWrapper>
);

const ChevronLeft = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polyline points="15 18 9 12 15 6" />
  </IconWrapper>
);

const ChevronDown = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polyline points="6 9 12 15 18 9" />
  </IconWrapper>
);

const Activity = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polyline points="22 12 18 12 15 4 9 20 6 12 2 12" />
  </IconWrapper>
);

const Cpu = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="4" y="4" width="16" height="16" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </IconWrapper>
);

const Database = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="3" width="18" height="5" />
    <rect x="3" y="10" width="18" height="5" />
    <rect x="3" y="17" width="18" height="5" />
    <path d="M4 5.5h1M4 12.5h1M4 19.5h1" />
  </IconWrapper>
);

const FileText = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="4 2 15 2 20 7 20 22 4 22" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="16" x2="16" y2="16" />
  </IconWrapper>
);

const FolderOpen = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="2 22 4 8 22 8 20 22" />
    <path d="M22 8V6a2 2 0 0 0-2-2h-8L8 2H4a2 2 0 0 0-2 2v16" />
  </IconWrapper>
);

const LayoutGrid = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </IconWrapper>
);

const Network = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="10" y="2" width="4" height="4" />
    <rect x="2" y="18" width="4" height="4" />
    <rect x="18" y="18" width="4" height="4" />
    <path d="M12 6v6M12 12H4v6M12 12h8v6" />
  </IconWrapper>
);

const Shield = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="12 2 20 5 20 11 12 22 4 11 4 5" />
  </IconWrapper>
);

const Settings = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="4" y="4" width="16" height="16" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
  </IconWrapper>
);

const Terminal = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polyline points="4 6 11 12 4 18" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </IconWrapper>
);

const Play = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="5 3 19 12 5 21" />
  </IconWrapper>
);

const RotateCcw = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <polyline points="3 3 3 8 8 8" />
  </IconWrapper>
);

const Clock = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="3" width="18" height="18" />
    <polyline points="12 6 12 12 16 12" />
  </IconWrapper>
);

const Compass = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="3" width="18" height="18" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" />
  </IconWrapper>
);

const FileCode = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="4 2 15 2 20 7 20 22 4 22" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="8 13 6 15 8 17" />
    <polyline points="16 13 18 15 16 17" />
  </IconWrapper>
);

const Sliders = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <rect x="1" y="10" width="6" height="4" />
    <rect x="9" y="8" width="6" height="4" />
    <rect x="17" y="12" width="6" height="4" />
  </IconWrapper>
);

const Bell = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </IconWrapper>
);

const Search = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="3" width="10" height="10" />
    <line x1="21" y1="21" x2="11" y2="11" />
  </IconWrapper>
);

const CheckSquare = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="3" width="18" height="18" />
    <polyline points="8 12 11 15 16 9" />
  </IconWrapper>
);

const AlertTriangle = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="12 2 22 21 2 21" />
    <line x1="12" y1="9" x2="12" y2="14" />
    <line x1="12" y1="17" x2="12" y2="17.01" />
  </IconWrapper>
);

const Radio = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </IconWrapper>
);

const SlidersHorizontal = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <line x1="3" y1="5" x2="14" y2="5" />
    <line x1="18" y1="5" x2="21" y2="5" />
    <line x1="3" y1="12" x2="8" y2="12" />
    <line x1="12" y1="12" x2="21" y2="12" />
    <line x1="3" y1="19" x2="16" y2="19" />
    <line x1="20" y1="19" x2="21" y2="19" />
    <rect x="14" y="2" width="4" height="6" />
    <rect x="8" y="9" width="4" height="6" />
    <rect x="16" y="16" width="4" height="6" />
  </IconWrapper>
);

const Workflow = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="3" width="6" height="6" />
    <rect x="15" y="15" width="6" height="6" />
    <rect x="3" y="15" width="6" height="6" />
    <path d="M6 9v6M9 6h6v9" />
  </IconWrapper>
);

const Sparkles = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.2 1.2L3 12l5.8 1.9a2 2 0 0 1 1.2 1.2L12 21l1.9-5.8a2 2 0 0 1 1.2-1.2L21 12l-5.8-1.9a2 2 0 0 1-1.2-1.2" />
  </IconWrapper>
);

const HelpCircle = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12" y2="17" />
  </IconWrapper>
);

const Volume2 = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </IconWrapper>
);

const VolumeX = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19" />
    <line x1="22" y1="9" x2="16" y2="15" />
    <line x1="16" y1="9" x2="22" y2="15" />
  </IconWrapper>
);

const Gauge = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <path d="M12 2a10 10 0 0 1 10 10c0 2.22-.73 4.27-1.96 5.92L12 12" />
    <circle cx="11.5" cy="12.5" r="1.5" />
    <path d="M3.96 17.92A10 10 0 0 1 12 2" />
  </IconWrapper>
);

const Zap = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10" />
  </IconWrapper>
);

const Maximize2 = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </IconWrapper>
);

const Minimize2 = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="10" y1="14" x2="3" y2="21" />
  </IconWrapper>
);

const Layers = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="12 2 2 7 12 12 22 7" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </IconWrapper>
);

const BarChart4 = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </IconWrapper>
);

const HardDrive = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="2" y="14" width="20" height="8" />
    <line x1="6" y1="18" x2="6" y2="18" strokeWidth="2" />
    <line x1="10" y1="18" x2="10" y2="18" strokeWidth="2" />
  </IconWrapper>
);

const Lock = ({ size, className, onClick, id, title }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id} title={title}>
    <rect x="3" y="11" width="18" height="11" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconWrapper>
);

const Unlock = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="11" width="18" height="11" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </IconWrapper>
);

const Key = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <path d="M21 2l-2 2M13.39 10.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zM20 4v3h2v2h-2v2h-2v-2" />
  </IconWrapper>
);

const Fingerprint = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <path d="M2 12a10 10 0 0 1 20 0M5 12a7 7 0 0 1 14 0M8 12a4 4 0 0 1 8 0" />
    <line x1="12" y1="12" x2="12" y2="22" />
  </IconWrapper>
);

const Server = ({ size, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="2" y="2" width="20" height="6" />
    <rect x="2" y="10" width="20" height="6" />
    <rect x="2" y="18" width="20" height="6" />
    <line x1="6" y1="5" x2="6" y2="5" strokeWidth="2" />
    <line x1="6" y1="13" x2="6" y2="13" strokeWidth="2" />
    <line x1="6" y1="21" x2="6" y2="21" strokeWidth="2" />
  </IconWrapper>
);

const SatelliteIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="9" y="9" width="6" height="6" strokeWidth="1.5" />
    <path d="M12 9V5M9 5h6" />
    <rect x="2" y="10" width="5" height="4" strokeWidth="1.2" />
    <line x1="7" y1="12" x2="9" y2="12" />
    <rect x="17" y="10" width="5" height="4" strokeWidth="1.2" />
    <line x1="15" y1="12" x2="17" y2="12" />
  </IconWrapper>
);

const RobotIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="4" y="6" width="16" height="13" strokeWidth="1.5" />
    <rect x="1" y="10" width="3" height="5" />
    <rect x="20" y="10" width="3" height="5" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <circle cx="12" cy="1.5" r="1" fill="currentColor" />
    <rect x="7" y="9" width="3" height="2" fill="currentColor" />
    <rect x="14" y="9" width="3" height="2" fill="currentColor" />
    <line x1="8" y1="14" x2="16" y2="14" />
  </IconWrapper>
);

const TelemetryIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <line x1="12" y1="12" x2="12" y2="21" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <path d="M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8" strokeWidth="1.5" />
    <polyline points="12 4 12 8" />
    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
  </IconWrapper>
);

const CoordinationIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <rect x="3" y="8" width="10" height="10" strokeWidth="1.5" />
    <rect x="11" y="4" width="10" height="10" strokeWidth="1.5" />
    <line x1="10" y1="11" x2="14" y2="11" strokeDasharray="1 1" />
  </IconWrapper>
);

const IntelligenceIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <path d="M2 19V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" strokeWidth="1.5" />
  </IconWrapper>
);

const AfterActionIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <line x1="3" y1="3" x2="3" y2="21" />
    <line x1="3" y1="21" x2="21" y2="21" />
    <rect x="6" y="11" width="3" height="10" strokeWidth="1.2" />
    <rect x="11" y="6" width="3" height="15" strokeWidth="1.2" />
    <rect x="16" y="13" width="3" height="8" strokeWidth="1.2" />
  </IconWrapper>
);

const PipelineIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <circle cx="6" cy="6" r="3" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="3" strokeWidth="1.5" />
    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" strokeWidth="1.5" />
  </IconWrapper>
);

const DocumentIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="4 2 15 2 20 7 20 22 4 22" strokeWidth="1.5" />
    <polyline points="14 2 14 8 20 8" strokeWidth="1.5" />
  </IconWrapper>
);

const AlertIcon = ({ size = 11, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="12 2 22 21 2 21" strokeWidth="1.5" />
    <line x1="12" y1="9" x2="12" y2="14" />
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" />
  </IconWrapper>
);

const DefenseIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <polygon points="12 2 22 8 22 16 12 22 2 16 2 8" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
  </IconWrapper>
);

const MeridianIcon = ({ size = 12, className, onClick, id }: IconProps) => (
  <IconWrapper size={size} className={className} onClick={onClick} id={id}>
    <circle cx="12" cy="5" r="2.5" strokeWidth="1.5" />
    <circle cx="5" cy="14" r="2" strokeWidth="1.5" />
    <circle cx="12" cy="19" r="2" strokeWidth="1.5" />
    <circle cx="19" cy="14" r="2" strokeWidth="1.5" />
    <line x1="12" y1="7.5" x2="5.5" y2="12" strokeWidth="1.5" />
    <line x1="12" y1="7.5" x2="12" y2="17" strokeWidth="1.5" />
    <line x1="12" y1="7.5" x2="18.5" y2="12" strokeWidth="1.5" />
  </IconWrapper>
);

// --- Types & Constants & Themes ---
type ActivePerspective = "PLANNING" | "EXECUTION" | "TELEMETRY" | "COORDINATION" | "INTELLIGENCE" | "AFTER_ACTION" | "PIPELINE_DESIGNER";
type SystemTheme = "TEAL_TACTICAL" | "COBALT_GENOME";

interface Agent {
  id: string;
  name: string;
  type: string;
  state: "RUNNING" | "IDLE" | "WARNING";
  provider: string;
  model: string;
  uptime: string;
  load: number;
}

interface WorkspaceFile {
  name: string;
  size: string;
  type: string;
  content: string;
}

interface ApprovalRequest {
  id: string;
  agent: string;
  action: string;
  payload: string;
  timestamp: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
}

interface TimelineEvent {
  time: string;
  type: string;
  message: string;
  badge: string;
  color: string;
}

const INITIAL_AGENTS: Agent[] = [
  { id: "ag-01", name: "RESEARCH_AGENT", type: "Reasoning Engine", state: "RUNNING", provider: "Google GenAI", model: "gemini-3.5-pro", uptime: "02:14:05", load: 84 },
  { id: "ag-02", name: "CODING_AGENT", type: "Synthetic Synthesizer", state: "RUNNING", provider: "Google GenAI", model: "gemini-3.5-flash", uptime: "01:22:40", load: 62 },
  { id: "ag-03", name: "ROUTER_AGENT", type: "Neural Gatekeeper", state: "IDLE", provider: "Anthropic", model: "claude-3-5-sonnet", uptime: "04:12:44", load: 15 },
  { id: "ag-04", name: "SUPPORT_AGENT", type: "Diagnostic Sentry", state: "WARNING", provider: "OpenAI", model: "gpt-4o", uptime: "00:05:12", load: 91 },
];

const INITIAL_FILES: WorkspaceFile[] = [
  { name: "schema.sql", size: "2.4 KB", type: "SQL", content: "CREATE TABLE agents (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(255),\n  state VARCHAR(50)\n);" },
  { name: "config.json", size: "1.1 KB", type: "JSON", content: "{\n  \"env\": \"production\",\n  \"router_threshold\": 0.85,\n  \"failover_retry_limit\": 3\n}" },
  { name: "directives.md", size: "850 B", type: "MD", content: "# Operations Blueprint\n- Enforce strictly schema-typed payloads\n- Minimize latency to <150ms" },
];

const INITIAL_APPROVALS: ApprovalRequest[] = [
  { id: "apr-81", agent: "CODING_AGENT", action: "Write to schema.sql", payload: "ALTER TABLE agents ADD COLUMN last_heartbeat TIMESTAMP;", timestamp: "12:04:12", status: "PENDING" },
  { id: "apr-82", agent: "RESEARCH_AGENT", action: "External API Hookup", payload: "GET https://api.workspace.internal/v1/metrics", timestamp: "12:03:55", status: "PENDING" },
  { id: "apr-83", agent: "SUPPORT_AGENT", action: "Flush Cache Memory", payload: "REDIS CLI FLUSHALL", timestamp: "12:01:20", status: "PENDING" },
];

const TIMELINE_REPLAY_EVENTS: TimelineEvent[] = [
  { time: "12:04:21", type: "SPAWN", message: "Research Agent spawned in sandbox execution sub-context.", badge: "SPAWN", color: "text-[#4ADE80]" },
  { time: "12:04:24", type: "CONFIG", message: "Model selected: Gemini 3.5 Pro via Google provider. Loading vector indices.", badge: "CONFIG", color: "text-[#3B82F6]" },
  { time: "12:04:29", type: "YIELD", message: "Tool Call invoked: sqlite_db_query('SELECT * FROM telemetry LIMIT 50')", badge: "TOOL_CALL", color: "text-[#F59E0B]" },
  { time: "12:04:31", type: "ERROR", message: "Provider response timeout - 5000ms threshold breached.", badge: "TIMEOUT", color: "text-[#EF4444]" },
  { time: "12:04:33", type: "RETRY", message: "Failover route engaged -> Engaged Google GenAI Backup Cluster (Low Latency).", badge: "FAILOVER", color: "text-[#F59E0B]" },
  { time: "12:04:36", type: "RESULT", message: "Payload successfully fetched (1.4 KB). Routing stream back to coder agent.", badge: "RESOLVED", color: "text-[#4ADE80]" },
  { time: "12:04:40", type: "COMMIT", message: "Action pipeline evaluated successfully. All objectives fulfilled.", badge: "COMMIT", color: "text-[#4ADE80]" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#040508]/95 border-2 border-[#141C2B] p-2.5 font-mono text-[9px] text-zinc-300 rounded-none shadow-xl select-none">
        <div className="font-bold text-white border-b border-zinc-900 pb-1 mb-1.5 font-mono tracking-wider">
          🛰️ SCAN_T_UTC: {label}
        </div>
        <div className="space-y-1.5">
          {payload.map((entry: any) => {
            const isLatency = entry.name.toLowerCase().includes("latency");
            const unit = isLatency ? " ms" : " tkn";
            return (
              <div key={entry.name} className="flex justify-between items-center gap-4">
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <span className="w-1.5 h-1.5 inline-block" style={{ backgroundColor: entry.color }} />
                  <span className="uppercase tracking-tight">{entry.name}:</span>
                </span>
                <span className="font-bold font-mono" style={{ color: entry.color }}>
                  {entry.value}{unit}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default function MeridianRuntimeOSConsole() {
  const [isSshAuthenticated, setIsSshAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("meridian_ssh_auth") === "true";
    }
    return false;
  });
  const [sshSelectedCipher, setSshSelectedCipher] = useState<string>("ED25519");

  const [selectedPerspective, setSelectedPerspective] = useState<ActivePerspective>("EXECUTION");
  const [activeOperationId, setActiveOperationId] = useState("OPERATION_842");

  // Aesthetic Active Theme
  const [systemTheme, setSystemTheme] = useState<SystemTheme>("TEAL_TACTICAL");
  const [anomalyDetectionEnabled, setAnomalyDetectionEnabled] = useState(false);
  const [trendAnalysisEnabled, setTrendAnalysisEnabled] = useState(false);
  
  // Collapsible Nav Drawers State
  const [leftDrawerCollapsed, setLeftDrawerCollapsed] = useState(false);
  const [rightDrawerCollapsed, setRightDrawerCollapsed] = useState(false);
  
  // Custom Controls for About Modal and Info Dropdown Menu
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [printSpeed, setPrintSpeed] = useState<number>(12); // ms per character
  
  // New States: Philosophy Dropdown
  const [philosophyDropdownOpen, setPhilosophyDropdownOpen] = useState(false);
  
  // New States: Command Palette / Search Shortcut Overlay
  const [searchPaletteOpen, setSearchPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [agentFilter, setAgentFilter] = useState("");
  
  // New States: Analog Clock Configuration
  const [showAnalogClock, setShowAnalogClock] = useState<boolean>(true);
  const [showSecondHand, setShowSecondHand] = useState<boolean>(true);
  const [isOnline, setIsOnline] = useState<boolean>(true); // Online/Offline state signifier

  // New States: Telegram API plugin
  const [telegramBotToken, setTelegramBotToken] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("meridian_telegram_bot_token") || "";
    }
    return "";
  });
  const [telegramChatId, setTelegramChatId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("meridian_telegram_chat_id") || "";
    }
    return "";
  });
  const [telegramStatus, setTelegramStatus] = useState<"DISCONNECTED" | "CONNECTING" | "CONNECTED" | "ERROR">("DISCONNECTED");
  const [telegramMessages, setTelegramMessages] = useState<{ id: string; text: string; direction: "in" | "out"; timestamp: string }[]>([
    { id: "msg-1", text: "SYSTEM_PLUG: Meridian Telegram API channel monitoring activated.", direction: "in", timestamp: "17:30:00" }
  ]);
  const [telegramInputText, setTelegramInputText] = useState("");
  const [telegramAutoForward, setTelegramAutoForward] = useState(false);
  const [telegramLogs, setTelegramLogs] = useState<string[]>(["[TELEGRAM_PLUG] System initialized in standby mode. Input BOT_TOKEN."]);

  // Audio state
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Live Simulated State Blinking grid
  const [gridStates, setGridStates] = useState<number[]>(() => 
    Array.from({ length: 24 }, () => Math.floor(Math.random() * 4))
  );
  const [waveOffset, setWaveOffset] = useState(0);
  const [radarRotation, setRadarRotation] = useState(0);

  // Initialize simulated dynamic patterns
  useEffect(() => {
    
    // Smooth telemetry update loops
    const gridInterval = setInterval(() => {
      setGridStates(prev => prev.map(s => (Math.random() > 0.82 ? Math.floor(Math.random() * 4) : s)));
    }, 1200);

    const waveInterval = setInterval(() => {
      setWaveOffset(o => (o + 1) % 360);
      setRadarRotation(r => (r + 1.2) % 360);
    }, 50);

    return () => {
      clearInterval(gridInterval);
      clearInterval(waveInterval);
    };
  }, []);

  // Play procedural tactical sound effect
  const playSfx = (type: "click" | "warning" | "success" | "transition") => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === "warning") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        osc.frequency.setValueAtTime(180, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === "success") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === "transition") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      }
    } catch (e) {
      console.warn("Audio Context blocked or failed to init", e);
    }
  };

  // -------------------- TELEGRAM API PLUGIN CLIENT INTEGRATION ENGINE --------------------
  const handleTelegramSend = async (customText?: string) => {
    const textToSend = customText || telegramInputText;
    if (!textToSend.trim()) return;
    if (!telegramBotToken) {
      setTelegramLogs(prev => [...prev, "[ERROR] Send aborted. TELEGRAM_BOT_TOKEN parameter uninitialized."]);
      return;
    }
    
    setTelegramStatus("CONNECTING");
    setTelegramLogs(prev => [...prev, `[TRANSMIT] Dispatching stream sequence payload to chatID: ${telegramChatId || "PRIMARY"}...`]);
    
    const targetChat = telegramChatId || "@meridian_c2_channel";
    try {
      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: targetChat,
          text: `🛰️ [MERIDIAN_C2_SIGNAL]\n---\nDATE: ${new Date().toISOString()}\nMSG: ${textToSend}\n---`,
        }),
      });
      
      const data = await response.json();
      if (response.ok && data.ok) {
        playSfx("success");
        setTelegramStatus("CONNECTED");
        setTelegramMessages(prev => [
          ...prev, 
          { id: `tmsg-${Date.now()}`, text: textToSend, direction: "out", timestamp: new Date().toTimeString().slice(0, 8) }
        ]);
        setTelegramLogs(prev => [...prev, `[SUCCESS] Dispatch delivered. Telegram target returned status code 200.`]);
        if (!customText) setTelegramInputText("");
      } else {
        playSfx("warning");
        setTelegramStatus("ERROR");
        setTelegramLogs(prev => [...prev, `[ERROR] Broadcast delivery failed. Code: ${data.error_code || "UNKNOWN"} - ${data.description || "Unrecognized payload status"}`]);
      }
    } catch (err: any) {
      playSfx("warning");
      setTelegramStatus("ERROR");
      setTelegramLogs(prev => [...prev, `[ERROR] Socket exception resolved: ${err.message || "Failed dynamic fetch sequence"}`]);
    }
  };

  const fetchTelegramUpdates = async () => {
    if (!telegramBotToken) return;
    try {
      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/getUpdates?limit=5`);
      const data = await response.json();
      if (response.ok && data.ok && data.result.length > 0) {
        const parsed: any[] = [];
        data.result.forEach((item: any) => {
          const msg = item.message || item.channel_post;
          if (msg && msg.text) {
            parsed.push({
              id: `tmsg-in-${item.update_id}`,
              text: `[From ${msg.chat?.title || msg.from?.username || "Telegram Chat"}]: ${msg.text}`,
              direction: "in",
              timestamp: new Date(msg.date * 1000).toTimeString().slice(0, 8)
            });
          }
        });
        if (parsed.length > 0) {
          setTelegramMessages(prev => {
            const unique = [...prev];
            parsed.forEach(p => {
              if (!unique.some(u => u.id === p.id)) {
                unique.push(p);
              }
            });
            return unique;
          });
          setTelegramLogs(prev => [...prev, `[SYNC] Synced ${parsed.length} raw telemetry updates from channel stream.`]);
        }
      }
    } catch (e) {}
  };

  const handleTelegramTestConnect = async () => {
    if (!telegramBotToken) {
      setTelegramLogs(prev => [...prev, "[ERROR] Connection test failed. Bot token is empty."]);
      return;
    }
    setTelegramStatus("CONNECTING");
    setTelegramLogs(prev => [...prev, `[HANDSHAKE] Contacting Telegram servers using secure credentials...`]);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("meridian_telegram_bot_token", telegramBotToken);
        localStorage.setItem("meridian_telegram_chat_id", telegramChatId);
      }
      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/getMe`);
      const data = await response.json();
      if (response.ok && data.ok) {
        playSfx("success");
        setTelegramStatus("CONNECTED");
        setTelegramLogs(prev => [
          ...prev, 
          `[CONNECTED] Handshake validated! Bot name: @${data.result.username} (${data.result.first_name || "Bot"}).`,
          `[CONNECTED] System linked as active plugin.`
        ]);
        fetchTelegramUpdates();
      } else {
        playSfx("warning");
        setTelegramStatus("ERROR");
        setTelegramLogs(prev => [...prev, `[ERROR] Credentials handshake denied. Code: ${data.error_code || "UNKNOWN"} - ${data.description || "Access unauthorized"}`]);
      }
    } catch (err: any) {
      playSfx("warning");
      setTelegramStatus("ERROR");
      setTelegramLogs(prev => [...prev, `[ERROR] Network failed to resolve Telegram host gateway: ${err.message}`]);
    }
  };

  // Live Auto-Sync thread for Telegram update telemetry
  useEffect(() => {
    if (telegramStatus !== "CONNECTED" || !telegramBotToken) return;
    const interval = setInterval(() => {
      fetchTelegramUpdates();
    }, 12000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [telegramStatus, telegramBotToken]);

  // Nav directory grouping collapsible states
  const [navCollapsed, setNavCollapsed] = useState({
    workspace: false,
    operations: false,
    agents: false,
    infrastructure: false,
    models: false,
  });

  const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS);
  const [files, setFiles] = useState<WorkspaceFile[]>(INITIAL_FILES);
  const [approvals, setApprovals] = useState<ApprovalRequest[]>(INITIAL_APPROVALS);
  const [selectedAgent, setSelectedAgent] = useState<Agent>(INITIAL_AGENTS[0]);
  const [selectedFile, setSelectedFile] = useState<WorkspaceFile>(INITIAL_FILES[0]);

  // Terminal logs
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[SYSTEM_INIT] Handshake authenticated with MERIDIAN_STATION_ALPHA...",
    "[SYSTEM_INIT] Secure Link established. Protocol rules: 90deg-monochromatic-dense.",
    "[RECON_PULSE] Tailscale node bridge online. Cache clusters responding instantly.",
    "[DIRECTIVE] Target telemetry synchronized on OPERATION_842. Awaiting operator input directives.",
  ]);
  const [terminalInput, setTerminalInput] = useState("");

  // Planning perspective objectives
  const [objectives, setObjectives] = useState([
    { id: "obj-1", text: "Parse orbital greenhouse zonal layout metrics", completed: true },
    { id: "obj-2", text: "Enforce JSON output restrictions in prompts", completed: true },
    { id: "obj-3", text: "Establish multi-cloud failover system redundancy", completed: false },
    { id: "obj-4", text: "Verify authentication token structures live", completed: false },
  ]);

  // Parameters
  const [tempParam, setTempParam] = useState(0.85);
  const [topPParam, setTopPParam] = useState(0.92);
  const [costLimit, setCostLimit] = useState("$2.50/HR");

  // Telemetry details
  const [telemetryLive, setTelemetryLive] = useState(true);

  interface TelemetryDataPoint {
    time: string;
    geminiTokens: number;
    claudeTokens: number;
    gptTokens: number;
    geminiLatency: number;
    claudeLatency: number;
    gptLatency: number;
  }

  const [telemetryChartData, setTelemetryChartData] = useState<TelemetryDataPoint[]>(() => {
    const data: TelemetryDataPoint[] = [];
    const baseTime = Date.now() - 30000;
    for (let i = 0; i < 15; i++) {
      const timestamp = new Date(baseTime + i * 2000);
      const timeStr = timestamp.toTimeString().split(" ")[0];
      data.push({
        time: timeStr,
        geminiTokens: 1200 + Math.floor(Math.random() * 800),
        claudeTokens: 600 + Math.floor(Math.random() * 400),
        gptTokens: 800 + Math.floor(Math.random() * 500),
        geminiLatency: 20 + Math.floor(Math.random() * 15),
        claudeLatency: 55 + Math.floor(Math.random() * 25),
        gptLatency: 90 + Math.floor(Math.random() * 35),
      });
    }
    return data;
  });

  const [isClientMounted, setIsClientMounted] = useState(false);

  useEffect(() => {
    let active = true;
    setTimeout(() => {
      if (active) {
        setIsClientMounted(true);
      }
    }, 10);
    return () => {
      active = false;
    };
  }, []);

  // Auto-forward any new approvals to Telegram Bot if enabled
  useEffect(() => {
    if (!telegramAutoForward || !telegramBotToken) return;
    const pending = approvals.filter(a => a.status === "PENDING");
    if (pending.length > 0) {
      const latest = pending[pending.length - 1];
      const forwardedKey = `tg_forwarded_${latest.id}`;
      if (typeof window !== "undefined" && !sessionStorage.getItem(forwardedKey)) {
        sessionStorage.setItem(forwardedKey, "true");
        handleTelegramSend(`⚠️ [APPROVAL REQUIRED]\nAgent: ${latest.agent}\nDirective: ${latest.action}\nPayload: ${latest.payload.slice(0, 100)}...`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approvals, telegramAutoForward]);

  useEffect(() => {
    if (!telemetryLive) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      
      setTelemetryChartData((prev) => {
        const nextData = prev.length >= 15 ? [...prev.slice(1)] : [...prev];
        const lastPoint = prev[prev.length - 1] || {
          geminiTokens: 1500,
          claudeTokens: 800,
          gptTokens: 1000,
          geminiLatency: 25,
          claudeLatency: 65,
          gptLatency: 105,
        };

        const randomWalk = (val: number, min: number, max: number, maxStep: number) => {
          const step = (Math.random() - 0.5) * maxStep;
          return Math.max(min, Math.min(max, Math.round(val + step)));
        };

        nextData.push({
          time: timeStr,
          geminiTokens: randomWalk(lastPoint.geminiTokens, 1000, 3500, 400),
          claudeTokens: randomWalk(lastPoint.claudeTokens, 500, 2000, 300),
          gptTokens: randomWalk(lastPoint.gptTokens, 600, 2500, 350),
          geminiLatency: randomWalk(lastPoint.geminiLatency, 15, 45, 10),
          claudeLatency: randomWalk(lastPoint.claudeLatency, 40, 95, 15),
          gptLatency: randomWalk(lastPoint.gptLatency, 75, 165, 20),
        });
        return nextData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [telemetryLive]);

  // Timeline Scrubber Position
  const [replayIndex, setReplayIndex] = useState(TIMELINE_REPLAY_EVENTS.length - 1);

  // Pipeline Designer interactive states
  interface PipelineNode {
    id: string;
    label: string;
    agent: string;
    status: "COMPLETED" | "ACTIVE" | "IDLE" | "ERROR";
    x: number;
    y: number;
  }

  interface PipelineConnection {
    id: string;
    from: string;
    to: string;
  }

  const [pipelineNodes, setPipelineNodes] = useState<PipelineNode[]>(() => [
    { id: "node-1", label: "INGEST_TELEMETRY", agent: "RESEARCH_AGENT", status: "COMPLETED", x: 40, y: 70 },
    { id: "node-2", label: "REASON_VALIDATE", agent: "ROUTER_AGENT", status: "ACTIVE", x: 260, y: 160 },
    { id: "node-3", label: "SYNTHESIZE_CODE", agent: "CODING_AGENT", status: "IDLE", x: 470, y: 30 },
    { id: "node-4", label: "DEPLOY_SANDBOX", agent: "SUPPORT_AGENT", status: "IDLE", x: 470, y: 220 }
  ]);

  const [pipelineConnections, setPipelineConnections] = useState<PipelineConnection[]>(() => [
    { id: "conn-1", from: "node-1", to: "node-2" },
    { id: "conn-2", from: "node-2", to: "node-3" },
    { id: "conn-3", from: "node-2", to: "node-4" }
  ]);
  
  const [selectedOutputNodeId, setSelectedOutputNodeId] = useState<string | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [pipelineRunActive, setPipelineRunActive] = useState(false);
  const [newNodeLabel, setNewNodeLabel] = useState("");
  const [newNodeAgent, setNewNodeAgent] = useState("RESEARCH_AGENT");

  // Global mousemove and mouseup listeners to drag nodes around on the workspace canvas fluidly
  useEffect(() => {
    if (!draggingNodeId) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("pipeline-canvas-container");
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left - dragOffset.x;
      let y = e.clientY - rect.top - dragOffset.y;
      
      // Boundaries
      const maxX = rect.width - 172;
      const maxY = rect.height - 92;
      if (x < 6) x = 6;
      if (x > maxX) x = maxX;
      if (y < 6) y = 6;
      if (y > maxY) y = maxY;
      
      setPipelineNodes(prev => prev.map(node => 
        node.id === draggingNodeId ? { ...node, x: Math.round(x), y: Math.round(y) } : node
      ));
    };

    const handleGlobalMouseUp = () => {
      setDraggingNodeId(null);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [draggingNodeId, dragOffset]);

  const handleAddNode = () => {
    if (!newNodeLabel.trim()) {
      playSfx("warning");
      return;
    }
    const safeLabel = newNodeLabel.trim().toUpperCase().replace(/\s+/g, "_");
    const id = getImpureNodeId();
    const coords = getImpureCoordinates();
    const newNode: PipelineNode = {
      id,
      label: safeLabel,
      agent: newNodeAgent,
      status: "IDLE",
      x: coords.x,
      y: coords.y
    };
    setPipelineNodes(prev => [...prev, newNode]);
    setNewNodeLabel("");
    playSfx("success");
    setTerminalLogs(prev => [...prev, `[PIPELINE_ENGINE] Spawned new task node ${safeLabel} bound to agent auth ${newNodeAgent}.`]);
  };

  const handleAutoArrange = () => {
    playSfx("success");
    setTerminalLogs(prev => [...prev, "[PIPELINE_ENGINE] Running force-directed hierarchical layout optimization..."]);
    
    const ranks: Record<string, number> = {};
    pipelineNodes.forEach(n => { ranks[n.id] = 0; });
    
    for (let iter = 0; iter < pipelineNodes.length; iter++) {
      let changed = false;
      pipelineConnections.forEach(conn => {
        const fromLevel = ranks[conn.from] ?? 0;
        const toLevel = ranks[conn.to] ?? 0;
        if (toLevel <= fromLevel) {
          ranks[conn.to] = fromLevel + 1;
          changed = true;
        }
      });
      if (!changed) break;
    }
    
    const maxRank = Math.max(1, ...Object.values(ranks));
    
    const container = document.getElementById("pipeline-canvas-container");
    const containerWidth = container ? container.clientWidth : 650;
    const containerHeight = container ? container.clientHeight : 420;
    
    const widthLimit = containerWidth - 172;
    const heightLimit = containerHeight - 92;
    
    let currentPositions = pipelineNodes.map(n => ({
      id: n.id,
      x: n.x,
      y: n.y,
      vx: 0,
      vy: 0
    }));
    
    let step = 0;
    const totalSteps = 45;
    
    const runPhysicsStep = () => {
      const damping = 0.85;
      const k_level = 0.08;
      const k_rep = 350;
      const k_attract = 0.05;
      const k_gravity = 0.03;
      
      const nodesByRank: Record<number, string[]> = {};
      currentPositions.forEach(pos => {
        const r = ranks[pos.id] ?? 0;
        if (!nodesByRank[r]) nodesByRank[r] = [];
        nodesByRank[r].push(pos.id);
      });
      
      const nextPositions = currentPositions.map(node => {
        const id = node.id;
        const r = ranks[id] ?? 0;
        
        const columnCount = maxRank + 1;
        const colWidth = (containerWidth - 225) / Math.max(1, columnCount - 1);
        const targetX = 35 + r * Math.min(220, colWidth);
        
        const sameRankIds = nodesByRank[r] || [];
        const rankIndex = sameRankIds.indexOf(id);
        const totalInRank = sameRankIds.length;
        
        let targetY = containerHeight / 2 - 46;
        if (totalInRank > 1) {
          const verticalStride = Math.min(110, (containerHeight - 120) / (totalInRank - 1));
          const topStart = (containerHeight - (totalInRank - 1) * verticalStride) / 2 - 46;
          targetY = topStart + rankIndex * verticalStride;
        }
        
        let fx = (targetX - node.x) * k_level;
        let fy = (targetY - node.y) * k_level;
        
        fy += ((containerHeight / 2 - 46) - node.y) * k_gravity;
        
        currentPositions.forEach(other => {
          if (other.id === id) return;
          
          const cx1 = node.x + 80;
          const cy1 = node.y + 40;
          const cx2 = other.x + 80;
          const cy2 = other.y + 40;
          
          const dx = cx1 - cx2;
          const dy = cy1 - cy2;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq) || 1;
          
          if (dist < 200) {
            const force = k_rep / (dist * dist);
            fx += (dx / dist) * force * 15;
            fy += (dy / dist) * force * 15;
          }
        });
        
        pipelineConnections.forEach(conn => {
          if (conn.from === id || conn.to === id) {
            const isSource = conn.from === id;
            const otherId = isSource ? conn.to : conn.from;
            const otherNode = currentPositions.find(p => p.id === otherId);
            if (otherNode) {
              const dx = otherNode.x - node.x;
              const dy = otherNode.y - node.y;
              fx += dx * k_attract;
              fy += dy * k_attract;
            }
          }
        });
        
        const vx = (node.vx + fx) * damping;
        const vy = (node.vy + fy) * damping;
        
        let newX = node.x + vx;
        let newY = node.y + vy;
        
        if (newX < 15) newX = 15;
        if (newX > widthLimit) newX = widthLimit;
        if (newY < 15) newY = 15;
        if (newY > heightLimit) newY = heightLimit;
        
        return {
          id,
          x: newX,
          y: newY,
          vx,
          vy
        };
      });
      
      currentPositions = nextPositions;
      
      setPipelineNodes(prev => prev.map(n => {
        const nextPos = nextPositions.find(p => p.id === n.id);
        return nextPos ? { ...n, x: Math.round(nextPos.x), y: Math.round(nextPos.y) } : n;
      }));
      
      step++;
      if (step < totalSteps) {
        requestAnimationFrame(runPhysicsStep);
      } else {
        setTerminalLogs(prev => [...prev, "[PIPELINE_ENGINE] Force-directed alignment sequence fully completed and locked."]);
      }
    };
    
    requestAnimationFrame(runPhysicsStep);
  };

  const runPipelineSimulation = async () => {
    if (pipelineNodes.length === 0) return;
    setPipelineRunActive(true);
    playSfx("success");
    setTerminalLogs(prev => [...prev, "[PIPELINE_RUN] Initiating secure agent workstream pipeline execution sequence..."]);

    // Set all nodes to IDLE initially
    setPipelineNodes(prev => prev.map(n => ({ ...n, status: "IDLE" })));

    // Let's run topological sequentially step-by-step
    for (let i = 0; i < pipelineNodes.length; i++) {
      const activeNode = pipelineNodes[i];
      
      // Update its status to ACTIVE
      setPipelineNodes(prev => prev.map((n, idx) => 
        idx === i ? { ...n, status: "ACTIVE" } : (idx < i ? { ...n, status: "COMPLETED" } : n)
      ));
      
      playSfx("click");
      setTerminalLogs(prev => [
        ...prev,
        `[PIPELINE_RUN] [${activeNode.agent}] executing core task: ${activeNode.label} // state parameter locked.`
      ]);

      // Wait 1.3 seconds per node step
      await new Promise(resolve => setTimeout(resolve, 1300));
    }

    // Set all to COMPLETED when done!
    setPipelineNodes(prev => prev.map(n => ({ ...n, status: "COMPLETED" })));
    setPipelineRunActive(false);
    playSfx("success");
    setTerminalLogs(prev => [...prev, "[PIPELINE_RUN] Sequential workspace pipeline run completed successfully. All outputs validated."]);
  };

  // Clock
  const [epochTime, setEpochTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setEpochTime(now.toISOString().split("T")[1].slice(0, 8));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Global Keyboard Navigation and Command Palette Shortcuts (Ctrl+K, Ctrl+Enter, Esc, and Alt Views)
  useEffect(() => {
    const handleGlobalShortcuts = (e: KeyboardEvent) => {
      // 1. Ctrl+K (or Cmd+K) to toggle command palette search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        playSfx("transition");
        setSearchPaletteOpen((prev) => !prev);
        return;
      }
      
      // 2. Ctrl+Enter to submit terminal command (or focus terminal if elsewhere)
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        const termInput = document.getElementById("terminal-manual-input") as HTMLInputElement;
        if (document.activeElement === termInput) {
          const submitBtn = document.getElementById("terminal-submit-btn") as HTMLButtonElement;
          if (submitBtn) {
            e.preventDefault();
            submitBtn.click();
          }
        } else {
          if (termInput) {
            e.preventDefault();
            termInput.focus();
            playSfx("click");
          }
        }
        return;
      }

      // 3. Escape key to dismiss search palette
      if (e.key === "Escape") {
        if (searchPaletteOpen) {
          setSearchPaletteOpen(false);
          playSfx("transition");
          return;
        }
      }

      // 4. Alt+1..7 for switching perspectives (only switch if not focused in inputs/textareas)
      const element = document.activeElement;
      const isInputFocused = element && (
        element.tagName === "INPUT" || 
        element.tagName === "TEXTAREA" || 
        (element as HTMLElement).isContentEditable
      );

      if (e.altKey && !isInputFocused) {
        if (e.key === "1") {
          e.preventDefault();
          changePerspective("PLANNING");
        } else if (e.key === "2") {
          e.preventDefault();
          changePerspective("EXECUTION");
        } else if (e.key === "3") {
          e.preventDefault();
          changePerspective("TELEMETRY");
        } else if (e.key === "4") {
          e.preventDefault();
          changePerspective("COORDINATION");
        } else if (e.key === "5") {
          e.preventDefault();
          changePerspective("INTELLIGENCE");
        } else if (e.key === "6") {
          e.preventDefault();
          changePerspective("AFTER_ACTION");
        } else if (e.key === "7") {
          e.preventDefault();
          changePerspective("PIPELINE_DESIGNER");
        } else if (e.key.toLowerCase() === "t") {
          e.preventDefault();
          playSfx("transition");
          setSystemTheme((prev) => (prev === "TEAL_TACTICAL" ? "COBALT_GENOME" : "TEAL_TACTICAL"));
        } else if (e.key.toLowerCase() === "l") {
          e.preventDefault();
          playSfx("warning");
          setIsSshAuthenticated(false);
          if (typeof window !== "undefined") {
            sessionStorage.removeItem("meridian_ssh_auth");
          }
        }
      }
    };

    window.addEventListener("keydown", handleGlobalShortcuts);
    return () => window.removeEventListener("keydown", handleGlobalShortcuts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchPaletteOpen, systemTheme]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const cleanCmd = terminalInput.trim().toUpperCase();
    playSfx("click");
    
    let output = `[OPERATOR@C2] ${terminalInput}`;
    let reply = "";

    if (cleanCmd.startsWith("EXECUTE")) {
      reply = `[EXECUTION_ENGINE] Instantiating run context for '${terminalInput.slice(8)}'`;
      playSfx("success");
    } else if (cleanCmd === "CLEAR") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else if (cleanCmd === "HELP") {
      reply = "[AVAILABLE_COMMANDS] HELP, CLEAR, EXECUTE [AgentName], STATS, STATE_RESTORE";
    } else if (cleanCmd === "STATS") {
      reply = `[SYS_STATS] Agents: ${agents.length} active, Latency: 12ms, Burn Target: ${costLimit}`;
    } else {
      reply = `[ROUTER] Manual override command logged and piped. Broadcast status: active.`;
    }

    setTerminalLogs((prev) => [...prev, output, reply]);
    setTerminalInput("");
  };

  const toggleObjective = (id: string) => {
    playSfx("click");
    setObjectives((prev) =>
      prev.map((obj) => (obj.id === id ? { ...obj, completed: !obj.completed } : obj))
    );
  };

  const handleApprovalAction = (id: string, action: "APPROVED" | "REJECTED") => {
    if (action === "APPROVED") {
      playSfx("success");
    } else {
      playSfx("warning");
    }
    setApprovals((prev) =>
      prev.map((apr) => (apr.id === id ? { ...apr, status: action } : apr))
    );
    setTerminalLogs((prev) => [
      ...prev,
      `[COORDINATION_ENGINE] Override request ${id} manually ${action} by authorized console operator.`,
    ]);
  };

  const changePerspective = (perspective: ActivePerspective) => {
    playSfx("transition");
    setSelectedPerspective(perspective);
  };

  // Theme Coloring Helper variables
  const isTeal = systemTheme === "TEAL_TACTICAL";
  
  const themeColors = {
    bgBase: isTeal ? "bg-[#060807]" : "bg-[#06070B]",
    bgPane: isTeal ? "bg-[#0A0E0C]" : "bg-[#0A0B10]",
    borderMain: isTeal ? "border-[#142C21]" : "border-[#141C2B]",
    borderAccent: isTeal ? "border-[#10B981]/50" : "border-[#3B82F6]/50",
    textBright: isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]",
    textDim: isTeal ? "text-[#77B297]" : "text-[#8AB0D2]",
    solidAccent: isTeal ? "#10B981" : "#3B82F6",
    glowAccent: isTeal ? "rgba(16,185,129,0.15)" : "rgba(59,130,246,0.15)",
    warnColor: isTeal ? "#F59E0B" : "#F97316", // Amber vs Orange
    dangerColor: "#EF4444",
  };

  if (!isClientMounted) return null;

  if (!isSshAuthenticated) {
    return (
      <SshLoginGate 
        onAuthSuccess={(cipher: string) => {
          setSshSelectedCipher(cipher);
          setIsSshAuthenticated(true);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("meridian_ssh_auth", "true");
          }
          setTerminalLogs(prev => [
            ...prev,
            `[SECURITY] SSH Authorized secure connection established via ${cipher} cipher.`,
            `[SECURITY] Cryptographic handshakes active. Symmetric tunnel initialized.`
          ]);
        }}
        isTeal={isTeal}
        themeColors={themeColors}
        playSfx={playSfx}
      />
    );
  }

  const nowForClock = new Date();
  const hrs = nowForClock.getHours();
  const mins = nowForClock.getMinutes();
  const secs = nowForClock.getSeconds();

  return (
    <div id="meridian-mainframe" className={`flex flex-col h-screen ${themeColors.bgBase} text-[#DEEBE4] font-mono text-[11px] overflow-hidden select-none`}>
      
      {/* -------------------- CONTEXT PLANE (Top Navbar) -------------------- */}
      <header id="meridian-header" className={`flex-none h-11 bg-[#090C0B] border-b-2 ${themeColors.borderMain} flex items-center justify-between px-4 z-30`}>
        <div className="flex items-center gap-4 h-full">
          <div className="flex items-center gap-2">
            <MeridianIcon size={15} className={`${isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"} ${telemetryLive ? "animate-pulse" : ""}`} />
            <span className="font-bold text-xs tracking-wider text-white font-sans">MERIDIAN_C2_ALPHA</span>
          </div>
          
          <div className={`h-5 w-[2px] ${themeColors.borderMain} hidden lg:block`} />

          {/* C2 dropdown help / philosophy menu */}
          <div className="relative mr-1.5" onMouseLeave={() => setHelpDropdownOpen(false)}>
            <button
              id="c2-sys-dropdown-btn"
              onClick={() => { setHelpDropdownOpen(!helpDropdownOpen); playSfx("click"); }}
              className={`px-2.5 py-1 text-[9.5px] font-mono font-bold uppercase cursor-pointer border flex items-center gap-1.5 transition-all duration-150 ${helpDropdownOpen ? "border-[#10B981] text-[#54FFA6] bg-black/80" : "border-zinc-850 hover:border-zinc-600 text-zinc-300 hover:text-white bg-black/40"}`}
            >
              <span>SYSTEM_C2</span>
              <ChevronDown size={10} className={`transition-transform duration-200 ${helpDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {helpDropdownOpen && (
              <div
                id="c2-sys-dropdown-menu"
                className={`absolute left-0 mt-1 w-[180px] bg-black border-2 ${isTeal ? "border-[#10B981]" : "border-[#3B82F6]"} z-50 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.8)] py-1 font-mono`}
              >
                <button
                  id="dropdown-about-btn"
                  onClick={() => {
                    setHelpDropdownOpen(false);
                    setAboutModalOpen(true);
                    playSfx("success");
                  }}
                  className={`w-full text-left px-3 py-1.5 text-[10px] hover:bg-zinc-900 group flex items-center gap-2 text-zinc-300 hover:text-white transition-colors`}
                >
                  <Cpu size={11} className={isTeal ? "text-[#10B981]" : "text-[#3B82F6]"} />
                  <span className="font-bold uppercase tracking-wider">ABOUT_SYSTEM</span>
                </button>
                <div className="h-px bg-zinc-900 mx-1.5" />
                <button
                  id="dropdown-philosophy-btn"
                  onClick={() => {
                    setPhilosophyDropdownOpen(!philosophyDropdownOpen);
                    playSfx("success");
                  }}
                  className={`w-full text-left px-3 py-1.5 text-[10px] hover:bg-zinc-900 group flex items-center justify-between text-zinc-350 hover:text-white transition-colors`}
                >
                  <div className="flex items-center gap-2">
                    <FileText size={11} className={isTeal ? "text-[#10B981]" : "text-[#3B82F6]"} />
                    <span className="font-bold uppercase tracking-wider">C2_PHILOSOPHY</span>
                  </div>
                  <span className={`text-[7px] font-bold border px-1 ${philosophyDropdownOpen ? "bg-emerald-950 border-emerald-900 text-[#54FFA6]" : "bg-zinc-950 border-zinc-850 text-zinc-550"}`}>
                    {philosophyDropdownOpen ? "OPEN" : "VIEW"}
                  </span>
                </button>
                <div className="h-px bg-zinc-900 mx-1.5" />
                <button
                  id="dropdown-lock-btn"
                  onClick={() => {
                    setHelpDropdownOpen(false);
                    setIsSshAuthenticated(false);
                    if (typeof window !== "undefined") {
                      sessionStorage.removeItem("meridian_ssh_auth");
                    }
                    playSfx("warning");
                  }}
                  className="w-full text-left px-3 py-1.5 text-[10px] hover:bg-zinc-900 group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Lock size={11} className="text-red-400 group-hover:scale-115 transition-transform" />
                  <span className="font-bold uppercase tracking-wider">LOCK SYSTEM [SSH]</span>
                </button>
                <div className="h-px bg-zinc-900 mx-1.5" />
                <button
                  onClick={() => {
                    setHelpDropdownOpen(false);
                    playSfx("click");
                    setTerminalLogs(prev => [
                      ...prev,
                      `[DUMP_STATE] System hash successfully registered: ${Date.now().toString(16).toUpperCase()} // Core Temp: ${tempParam} // active_ greenhouse_grid_node.`
                    ]);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-[10px] hover:bg-zinc-900 group flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors`}
                >
                  <Database size={11} className="text-zinc-500 group-hover:text-zinc-300" />
                  <span className="uppercase tracking-wider">DUMP_STATE_HASH</span>
                </button>

                {/* Popout Philosophy Card (Aligned right to the dropdown) */}
                {philosophyDropdownOpen && (
                  <div 
                    id="c2-philosophy-drawer"
                    className="absolute left-[185px] top-0 w-[420px] bg-[#000000] border-2 border-[#10B981] p-4 text-[#DEEBE4] font-mono z-[100] rounded-none shadow-[0_0_30px_rgba(16,185,129,0.25)] select-text text-left"
                  >
                    {/* Title */}
                    <h3 className="text-[#54FFA6] font-bold text-center text-[10px] tracking-widest uppercase border-b border-zinc-900 pb-2 mb-3 select-none">
                      ⚡ INSTANT DIRECTIVE: MERIDIAN DESIGN PHILOSOPHY ⚡
                    </h3>

                    {/* Sub-Headline */}
                    <h4 className="text-white font-bold text-center text-[9px] uppercase mb-2 select-none">
                      --- ANTI-AI SLOP / ZERO ROUNDING DATA INTENSE GRAPHICAL CONSOLE ---
                    </h4>

                    {/* Body Text: Fully Justified for ultra clarity */}
                    <div className="space-y-3.5 text-[9.5px] leading-relaxed text-zinc-300">
                      <p className="text-justify select-text" style={{ textAlign: "justify" }}>
                        Meridian rejects standard SaaS interfaces, soft layouts, and feature-isolated routing. Every operational telemetry view serves as a direct top-down, left-to-right hierarchical coordinate alignment. We emphasize a strict Common Operating Picture to combine maximum visual dense telemetry with mission-driven commands.
                      </p>

                      <p className="text-justify select-text" style={{ textAlign: "justify" }}>
                        <strong>MODERN-RETRO & ANTI-AI-SLOP:</strong> Every border intersection matches exact 90-degree angular alignments (border-radius: 0). No rounded capsules, gradients, or marketing fluff are permitted to clutter the operator&apos;s workspace. Color indicators specify strict logical registries: Fern Green signifies active telemetry, Amber alerts incident logs, and Cobalt represents relative structural hashes.
                      </p>

                      <p className="text-justify select-text" style={{ textAlign: "justify" }}>
                        <strong>HIGH CONTRAST WCAG RATIO:</strong> Using deep pitch blacks (#000000) and ultra-bright phosphor monochromatic characters, contrast benchmarks exceed 12:1 to guarantee readability under raw outdoor tactical coordinates. High-density grids utilize screen real-estate to present physical indices and telemetry in direct formats.
                      </p>
                    </div>

                    {/* Footer specs */}
                    <div className="border-t border-zinc-900 pt-2 mt-4 flex justify-between items-center text-[8px] text-zinc-550 select-none">
                      <span>SPECIFICATION REVISION v4.5</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setPhilosophyDropdownOpen(false); playSfx("click"); }}
                        className="text-red-400 font-bold hover:text-red-300 uppercase underline cursor-pointer"
                      >
                        DISMISS_DRAWER
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className={`h-5 w-[2px] ${themeColors.borderMain} hidden lg:block`} />
          
          {/* Theme select controls */}
          <div className="flex items-center gap-1.5 bg-black/40 border border-zinc-850 p-0.5 rounded-none mr-2">
            <button 
              id="theme-toggle-teal"
              onClick={() => { setSystemTheme("TEAL_TACTICAL"); playSfx("transition"); }}
              className={`px-2 py-0.5 text-[9px] font-bold uppercase transition-all duration-150 ${isTeal ? "bg-[#10B981]/25 text-[#54FFA6] border border-[#10B981]/40" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              OP_GREENHOUSE_TEAL
            </button>
            <button 
              id="theme-toggle-cobalt"
              onClick={() => { setSystemTheme("COBALT_GENOME"); playSfx("transition"); }}
              className={`px-2 py-0.5 text-[9px] font-bold uppercase transition-all duration-150 ${!isTeal ? "bg-[#3B82F6]/25 text-[#5CB4FF] border border-[#3B82F6]/40" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              COBALT_GENOME_ANTR
            </button>
          </div>

          <div className={`h-5 w-[2px] ${themeColors.borderMain} hidden xl:block`} />

          {/* Quick status reads */}
          <div className="hidden xl:flex items-center gap-4 text-[10px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-600">STATE:</span>
              <span className={`font-semibold ${isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"}`}>AUTHENTICATED</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-600">CORES:</span>
              <span className="text-white font-bold">{agents.filter(a => a.state === "RUNNING").length} ACTIVE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-600">INCIDENTS:</span>
              <span className="text-[#F59E0B] font-bold">{agents.filter(a => a.state === "WARNING").length} DETECTED</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-zinc-600">SESSION_BURN:</span>
              <span className="text-zinc-300 font-bold">$2.29/HR</span>
            </div>
          </div>
        </div>

        {/* Audio control & System Clock / Theme state indicia */}
        <div className="flex items-center gap-2">
          {/* SSH Session Lock Button */}
          <button 
            id="ssh-lock-btn"
            onClick={() => {
              setIsSshAuthenticated(false);
              if (typeof window !== "undefined") {
                sessionStorage.removeItem("meridian_ssh_auth");
              }
              playSfx("warning");
            }} 
            className="px-2.5 py-1 border border-zinc-850 hover:border-red-900 text-zinc-400 hover:text-red-400 bg-transparent transition-colors flex items-center gap-1.5 cursor-pointer font-mono"
            title="Lock operational terminal and require SSH key re-authentication"
          >
            <Lock size={12} className="text-zinc-500 hover:text-red-400" />
            <span className="text-[9px] uppercase tracking-wider hidden sm:inline">LOCK_C2</span>
          </button>

          {/* SFX Button */}
          <button 
            id="sfx-toggle-btn"
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              setTimeout(() => playSfx("success"), 50);
            }} 
            className={`px-2.5 py-1 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer ${soundEnabled ? "bg-white/5 text-[#54FFA6] border-[#10B981]/40" : "text-zinc-500 bg-transparent"}`}
            title="Toggle Tactical Audio Feedback"
          >
            {soundEnabled ? <Volume2 size={12} className="text-[#54FFA6]" /> : <VolumeX size={12} className="text-zinc-500" />}
            <span className="text-[9px] uppercase tracking-wider hidden sm:inline font-mono">TACTICAL_FX</span>
          </button>
          
          {/* Clock Display */}
          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-850 px-2 py-0.5 text-zinc-400 font-mono text-[10px] select-none hover:border-zinc-700 transition-colors">
            
            {/* The SVG Analog Clock state signifier */}
            {showAnalogClock && (
              <div 
                className={`relative w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${isOnline ? "animate-pulse bg-zinc-900 border" : "bg-zinc-950 border border-red-950"}`}
                style={{
                  borderColor: isOnline ? "#10B981" : "#7F1D1D",
                  boxShadow: isOnline ? "0 0 8px rgba(16,185,129,0.4)" : "none"
                }}
                title={isOnline ? "SYSTEM_ONLINE: Synchronized to atomic UTC beacon" : "SYSTEM_OFFLINE: Connection severed"}
                onClick={() => { playSfx("click"); setIsOnline(!isOnline); }}
              >
                <svg width="24" height="24" viewBox="0 0 30 30" className="text-zinc-350">
                  {/* Face */}
                  <circle cx="15" cy="15" r="13" fill="#040605" stroke={isOnline ? "#10B981" : "#7F1D1D"} strokeWidth="1" />
                  
                  {/* Hour markers */}
                  <line x1="15" y1="3" x2="15" y2="5" stroke={isOnline ? "#059669" : "#450A0A"} strokeWidth="1" />
                  <line x1="27" y1="15" x2="25" y2="15" stroke={isOnline ? "#059669" : "#450A0A"} strokeWidth="1" />
                  <line x1="15" y1="27" x2="15" y2="25" stroke={isOnline ? "#059669" : "#450A0A"} strokeWidth="1" />
                  <line x1="3" y1="15" x2="5" y2="15" stroke={isOnline ? "#059669" : "#450A0A"} strokeWidth="1" />

                  {/* Hour Hand */}
                  <line x1="15" y1="15" x2="15" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${((hrs % 12) * 30 + mins * 0.5)} 15 15)`} />
                  
                  {/* Minute Hand */}
                  <line x1="15" y1="15" x2="15" y2="6" stroke="#D1D5DB" strokeWidth="1" strokeLinecap="round" transform={`rotate(${(mins * 6)} 15 15)`} />
                  
                  {/* Second Hand */}
                  {showSecondHand && (
                    <line x1="15" y1="15" x2="15" y2="5" stroke="#F59E0B" strokeWidth="0.8" strokeLinecap="round" transform={`rotate(${(secs * 6)} 15 15)`} />
                  )}
                  
                  {/* Center Dot */}
                  <circle cx="15" cy="15" r="1.5" fill="#10B981" />
                </svg>
              </div>
            )}

            {/* Toggle Configuration triggers, beautiful high density buttons */}
            <div className="flex flex-col text-[7.5px] border-l border-zinc-900 pl-2 leading-none py-0.5 justify-center text-left">
              <span className={`font-bold transition-colors ${isOnline ? "text-[#54FFA6]" : "text-red-400"}`}>
                {isOnline ? "STATE: ONLINE" : "STATE: OFFLINE"}
              </span>
              <span className="text-zinc-500 font-mono mt-0.5">UTC {epochTime || "12:04:36"}</span>
            </div>

            <div className="flex gap-1 pl-1 border-l border-zinc-850">
              <button 
                onClick={() => { playSfx("click"); setShowSecondHand(!showSecondHand); }}
                className={`px-1 text-[7px] font-bold uppercase tracking-tighter border cursor-pointer ${showSecondHand ? "bg-white/5 text-amber-400 border-amber-800/40" : "text-zinc-500 border-zinc-950"}`}
                title="Toggle Second Hand Visibility"
              >
                SEC
              </button>
              <button 
                onClick={() => { playSfx("click"); setShowAnalogClock(!showAnalogClock); }}
                className={`px-1 text-[7px] font-bold uppercase tracking-tighter border cursor-pointer ${showAnalogClock ? "bg-white/5 text-[#54FFA6] border-[#10B981]/40" : "text-zinc-500 border-zinc-950"}`}
                title="Toggle Analog Clock Frame"
              >
                ANA
              </button>
              <button 
                onClick={() => { playSfx("click"); setIsOnline(!isOnline); }}
                className={`px-1 text-[7px] font-bold uppercase tracking-tighter border cursor-pointer ${isOnline ? "bg-white/5 text-emerald-450 border-emerald-800/40" : "bg-red-950 text-red-400 border-red-900/40"}`}
                title="Toggle Online State Indicator"
              >
                LINK
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* -------------------- MAIN AREA -------------------- */}
      <div id="meridian-main-body" className="flex flex-1 overflow-hidden relative">
        
        {/* ==================== LEFT COLLAPSED NAV STRIP ==================== */}
        {leftDrawerCollapsed && (
          <div 
            id="left-strip-bar"
            className={`w-[44px] flex-none ${themeColors.bgPane} border-r-2 ${themeColors.borderMain} flex flex-col items-center py-3 select-none z-20 transition-all duration-350`}
          >
            <button 
              id="expand-left-btn"
              onClick={() => { playSfx("transition"); setLeftDrawerCollapsed(false); }}
              className="p-1 mb-4 hover:bg-zinc-800/60 border border-zinc-900 group"
              title="Expand System index Index Navigation"
            >
              <ChevronRight size={14} className="text-zinc-400 group-hover:text-white" />
            </button>

            <div className="h-px w-6 bg-zinc-800 mb-4" />

            {/* Quick module shortcut triggers when collapsed */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => { changePerspective("PLANNING"); setLeftDrawerCollapsed(false); }}
                className={`p-1.5 border ${selectedPerspective === "PLANNING" ? "border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B]" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
                title="Planning perspective"
              >
                <Compass size={14} />
              </button>
              <button 
                onClick={() => { changePerspective("EXECUTION"); setLeftDrawerCollapsed(false); }}
                className={`p-1.5 border ${selectedPerspective === "EXECUTION" ? `border-[#10B981] bg-[#10B981]/10 text-[#54FFA6]` : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
                title="Execution perspective"
              >
                <Terminal size={14} />
              </button>
              <button 
                onClick={() => { changePerspective("TELEMETRY"); setLeftDrawerCollapsed(false); }}
                className={`p-1.5 border ${selectedPerspective === "TELEMETRY" ? `border-[#3B82F6] bg-[#3B82F6]/10 text-[#5CB4FF]` : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
                title="Telemetry metrics"
              >
                <Activity size={14} />
              </button>
              <button 
                onClick={() => { changePerspective("COORDINATION"); setLeftDrawerCollapsed(false); }}
                className={`p-1.5 border ${selectedPerspective === "COORDINATION" ? "border-[#A78BFA] bg-[#A78BFA]/10 text-[#A78BFA]" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
                title="Human coordination queue"
              >
                <Shield size={14} />
              </button>
              <button 
                onClick={() => { changePerspective("INTELLIGENCE"); setLeftDrawerCollapsed(false); }}
                className={`p-1.5 border ${selectedPerspective === "INTELLIGENCE" ? "border-zinc-400 bg-zinc-400/10 text-zinc-100" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
                title="Ingested knowledge"
              >
                <Database size={14} />
              </button>
              <button 
                onClick={() => { changePerspective("AFTER_ACTION"); setLeftDrawerCollapsed(false); }}
                className={`p-1.5 border ${selectedPerspective === "AFTER_ACTION" ? "border-red-500 bg-red-500/10 text-red-400" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
                title="After action analysis"
              >
                <BarChart4 size={14} />
              </button>
              <button 
                onClick={() => { changePerspective("PIPELINE_DESIGNER"); setLeftDrawerCollapsed(false); }}
                className={`p-1.5 border ${selectedPerspective === "PIPELINE_DESIGNER" ? `border-[#10B981] bg-[#10B981]/10 text-[#54FFA6]` : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
                title="Pipeline Designer Workspace"
              >
                <Workflow size={14} />
              </button>
            </div>
            
            <div className="mt-auto flex flex-col gap-2">
              <Sliders size={12} className="text-zinc-600 mb-2" />
              <div className={`w-2 h-2 ${telemetryLive ? "bg-[#4ADE80]" : "bg-red-500"} rounded-full`} />
            </div>
          </div>
        )}

        {/* ==================== LEFT PANEL: FULL EXPANDED NAV ==================== */}
        {!leftDrawerCollapsed && (
          <aside 
            id="left-sidebar-full"
            className="w-[245px] flex-none bg-[#090B0A] border-r-2 border-zinc-900 flex flex-col justify-between overflow-y-auto z-20 select-none transition-all duration-350"
          >
            <div className="flex flex-col">
              
              {/* Sidebar Header with Collapse control */}
              <div className="p-3 bg-zinc-950/90 border-b border-zinc-900 text-[9px] text-zinc-400 font-bold uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Cpu size={10} className={isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"} />
                  SYSTEM INDEX OPERATOR
                </span>
                <button 
                  id="collapse-left-btn"
                  onClick={() => { playSfx("transition"); setLeftDrawerCollapsed(true); }}
                  className="p-0.5 hover:bg-zinc-800 text-zinc-500 hover:text-zinc-100 border border-zinc-800"
                  title="Collapse Left Index Drawer"
                >
                  <ChevronLeft size={12} />
                </button>
              </div>

              {/* Hierarchical Indention Operator Tree */}
              <div className="p-2.5 space-y-1">
                
                {/* Directory Node 1: File/VFS Root */}
                <div id="vfs-root-node">
                  <div 
                    onClick={() => {
                      playSfx("click");
                      setNavCollapsed(p => ({ ...p, workspace: !p.workspace }));
                    }}
                    className="flex items-center gap-1.5 px-2 py-1 text-zinc-200 hover:bg-zinc-900/60 cursor-pointer font-bold select-none text-[10px]"
                  >
                    {navCollapsed.workspace ? <ChevronRight size={12} className="text-zinc-500" /> : <ChevronDown size={12} className="text-zinc-500" />}
                    <span>◀ WORKSPACE_VFS_STORE</span>
                  </div>

                  {!navCollapsed.workspace && (
                    <div className="pl-3.5 border-l border-zinc-900 ml-2 py-0.5 space-y-1">
                      
                      {/* Subfolder: Operations */}
                      <div>
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            playSfx("click");
                            setNavCollapsed(p => ({ ...p, operations: !p.operations }));
                          }}
                          className="flex items-center gap-1.5 px-1.5 py-0.5 text-zinc-400 hover:text-white cursor-pointer"
                        >
                          {navCollapsed.operations ? <ChevronRight size={10} /> : <ChevronDown size={10} />}
                          <span className="text-[10px] tracking-tight">▼ CLUSTER_MISSIONS</span>
                        </div>
                        {!navCollapsed.operations && (
                          <div className="pl-3 border-l border-zinc-900 ml-1.5 space-y-0.5">
                            <div 
                              onClick={() => { playSfx("click"); setActiveOperationId("OPERATION_842"); }}
                              className={`px-1.5 py-1 cursor-pointer flex items-center justify-between ${activeOperationId === "OPERATION_842" ? `bg-zinc-900 font-semibold text-white border-l-2 border-l-[#10B981]` : "text-zinc-500 hover:text-zinc-350"}`}
                            >
                              <span>● OP_842_HYPERION</span>
                              <span className="text-[7.5px] bg-[#10B981]/15 text-[#54FFA6] px-1 font-mono">ACTIVE</span>
                            </div>
                            <div 
                              onClick={() => { playSfx("click"); setActiveOperationId("OPERATION_841"); }}
                              className={`px-1.5 py-1 cursor-pointer flex items-center justify-between ${activeOperationId === "OPERATION_841" ? `bg-zinc-900 font-semibold text-white border-l-2 border-l-[#3B82F6]` : "text-zinc-500 hover:text-zinc-350"}`}
                            >
                              <span>○ OP_841_NIGHTFALL</span>
                              <span className="text-[7.5px] text-zinc-650 font-mono">STANDBY</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Subfolder: Agents */}
                      <div>
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            playSfx("click");
                            setNavCollapsed(p => ({ ...p, agents: !p.agents }));
                          }}
                          className="flex items-center gap-1.5 px-1.5 py-0.5 text-zinc-400 hover:text-white cursor-pointer"
                        >
                          {navCollapsed.agents ? <ChevronRight size={10} /> : <ChevronDown size={10} />}
                          <span className="text-[10px]">▼ NEURAL_AGENTS ({agents.length})</span>
                        </div>
                        {!navCollapsed.agents && (
                          <div className="pl-3 border-l border-zinc-900 ml-1.5 space-y-0.5">
                            <div className="px-1 py-1">
                              <input 
                                type="text"
                                placeholder="// SEARCH_AGENTS"
                                value={agentFilter}
                                onChange={(e) => setAgentFilter(e.target.value)}
                                className="w-full bg-black text-[8px] font-mono border border-zinc-800 focus:border-zinc-700 text-zinc-300 focus:text-white px-2 py-0.5 focus:outline-none placeholder-zinc-700 tracking-wider uppercase"
                              />
                            </div>
                            {agents
                              .filter((ag) => {
                                const q = agentFilter.toLowerCase().trim();
                                if (!q) return true;
                                return (
                                  ag.name.toLowerCase().includes(q) ||
                                  ag.provider.toLowerCase().includes(q) ||
                                  ag.state.toLowerCase().includes(q)
                                );
                              })
                              .map((ag) => (
                                <div 
                                  key={ag.id}
                                  onClick={() => { playSfx("click"); setSelectedAgent(ag); }}
                                  className={`group relative px-1.5 py-1 cursor-pointer flex items-center justify-between ${selectedAgent.id === ag.id ? "bg-zinc-900 text-white font-bold" : "text-zinc-500 hover:text-zinc-400"}`}
                                >
                                  <div className="flex items-center gap-1.5">
                                    <span className={`w-1.5 h-1.5 ${ag.state === "RUNNING" ? "bg-[#4ADE80]" : ag.state === "IDLE" ? "bg-zinc-600" : "bg-orange-500"} animate-pulse`} />
                                    <span className="truncate">{ag.name}</span>
                                  </div>
                                  <span className="text-[7.5px] font-mono opacity-80">{ag.load}%</span>

                                  {/* Info Popover */}
                                  <div className="absolute left-full ml-2 top-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-[#090B0A] border border-zinc-700 p-2 z-50 shadow-2xl min-w-[140px] transition-opacity duration-150 rounded-none">
                                    <div className="text-[8px] uppercase font-bold text-zinc-400 border-b border-zinc-800 pb-1 mb-1">AGENT_DIAGNOSTICS</div>
                                    <div className="flex justify-between py-0.5"><span className="text-zinc-500">PROVIDER</span><span className="text-[#3B82F6] text-[8px]">{ag.provider}</span></div>
                                    <div className="flex justify-between py-0.5"><span className="text-zinc-500">UPTIME</span><span className="text-[#10B981] font-mono text-[8px]">{ag.uptime}</span></div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>

                      {/* Subfolder: LLM Models */}
                      <div>
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            playSfx("click");
                            setNavCollapsed(p => ({ ...p, models: !p.models }));
                          }}
                          className="flex items-center gap-1.5 px-1.5 py-0.5 text-zinc-400 hover:text-white cursor-pointer"
                        >
                          {navCollapsed.models ? <ChevronRight size={10} /> : <ChevronDown size={10} />}
                          <span className="text-[10px]">▼ ENGINE_PROVIDER_MODELS</span>
                        </div>
                        {!navCollapsed.models && (
                          <div className="pl-3 border-l border-zinc-900 ml-1.5 space-y-0.5 text-zinc-500 text-[10px]">
                            <div className="px-1.5 py-0.5 flex items-center justify-between text-zinc-300">
                              <span>● gemini-3.5-pro</span>
                              <span className="text-[8px] bg-blue-500/15 text-[#3298FF] px-1 font-mono uppercase">GRID_SEC</span>
                            </div>
                            <div className="px-1.5 py-0.5 flex items-center justify-between text-[#54FFA6]">
                              <span>● gemini-3.5-flash</span>
                              <span className="text-[8px] bg-emerald-500/15 text-[#54FFA6] px-1 font-mono uppercase">LOW_LAT</span>
                            </div>
                            <div className="px-1.5 opacity-60 py-0.5 flex items-center justify-between">
                              <span>○ claude-3-5-sonnet</span>
                              <span className="text-[8px] px-1 font-mono">BACKUP</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Subfolder: Infrastructure */}
                      <div>
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            playSfx("click");
                            setNavCollapsed(p => ({ ...p, infrastructure: !p.infrastructure }));
                          }}
                          className="flex items-center gap-1.5 px-1.5 py-0.5 text-zinc-400 hover:text-white cursor-pointer"
                        >
                          {navCollapsed.infrastructure ? <ChevronRight size={10} /> : <ChevronDown size={10} />}
                          <span className="text-[10px]">▼ HARDWARE_INFRA</span>
                        </div>
                        {!navCollapsed.infrastructure && (
                          <div className="pl-3 border-l border-zinc-900 ml-1.5 space-y-0.5 text-[9.5px] text-zinc-500">
                            <div className="px-1.5 py-0.5 flex justify-between hover:bg-zinc-900">
                              <span>Tailscale Virtual VPC</span>
                              <span className="text-[#4ADE80] font-bold">100% OK</span>
                            </div>
                            <div className="px-1.5 py-0.5 flex justify-between hover:bg-zinc-900">
                              <span>SQLite Memory DB pool</span>
                              <span className="text-[#4ADE80] font-bold">0.12ms</span>
                            </div>
                            <div className="px-1.5 py-0.5 flex justify-between hover:bg-zinc-900">
                              <span>Redis stream broker</span>
                              <span className="text-[#4ADE80] font-medium">STABLE</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Vector Store/Knowledge Documents */}
                      <div>
                        <div className="flex items-center gap-1 px-1.5 py-0.5 text-zinc-400">
                          <FolderOpen size={11} className="text-zinc-500" />
                          <span className="text-[10px] flex items-center gap-1"><IntelligenceIcon size={11} className="text-zinc-500" /> VECTOR_KNOWLEDGE_FILES</span>
                        </div>
                        <div className="pl-3.5 space-y-0.5">
                          {files.map((file) => (
                            <div
                              key={file.name}
                              onClick={() => { playSfx("click"); setSelectedFile(file); changePerspective("INTELLIGENCE"); }}
                              className={`px-1.5 py-1 cursor-pointer flex items-center justify-between border-l border-transparent hover:bg-zinc-900/40 ${selectedFile.name === file.name && selectedPerspective === "INTELLIGENCE" ? "text-white bg-zinc-950/80 border-l-[#54FFA6] font-semibold" : "text-zinc-500"}`}
                            >
                              <span className="flex items-center gap-1.5"><DocumentIcon size={11} className="text-zinc-500" /> {file.name}</span>
                              <span className="text-[8px] font-mono opacity-60">{file.size}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </div>

                {/* Module Perspectives Fast-Selection shortcuts */}
                <div className="mt-4 pt-4 border-t border-zinc-900">
                  <div className="px-2 text-[8.5px] text-zinc-500 font-bold tracking-widest uppercase mb-1.5">ACTIVE COMMAND PERSPECTIVES</div>
                  <div className="space-y-0.5 text-[10px]">
                    <button 
                      onClick={() => changePerspective("PLANNING")}
                      className={`w-full text-left px-3 py-1.5 cursor-pointer flex items-center justify-between ${selectedPerspective === "PLANNING" ? "bg-zinc-900 text-white font-bold border-l-2 border-l-[#F59E0B]" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      <span className="flex items-center gap-1.5"><SatelliteIcon size={12} className={selectedPerspective === "PLANNING" ? "text-[#F59E0B]" : "text-zinc-500"} /> PLANNING</span>
                      <span className="text-[8px] bg-black border border-zinc-800 text-[#F59E0B] px-1 font-mono uppercase">DIR</span>
                    </button>
                    <button 
                      onClick={() => changePerspective("EXECUTION")}
                      className={`w-full text-left px-3 py-1.5 cursor-pointer flex items-center justify-between ${selectedPerspective === "EXECUTION" ? `bg-zinc-900 text-white font-bold border-l-2 border-l-[#10B981]` : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      <span className="flex items-center gap-1.5"><RobotIcon size={12} className={selectedPerspective === "EXECUTION" ? "text-[#10B981]" : "text-zinc-500"} /> EXECUTION</span>
                      <span className="text-[8px] bg-black border border-zinc-800 text-[#54FFA6] px-1 font-mono">EXEC</span>
                    </button>
                    <button 
                      onClick={() => changePerspective("TELEMETRY")}
                      className={`w-full text-left px-3 py-1.5 cursor-pointer flex items-center justify-between ${selectedPerspective === "TELEMETRY" ? `bg-zinc-900 text-white font-bold border-l-2 border-l-[#3B82F6]` : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      <span className="flex items-center gap-1.5"><TelemetryIcon size={12} className={selectedPerspective === "TELEMETRY" ? "text-[#3B82F6]" : "text-zinc-500"} /> TELEMETRY</span>
                      <span className="text-[8px] bg-black border border-zinc-800 text-[#5CB4FF] px-1 font-mono">LIVE</span>
                    </button>
                    <button 
                      onClick={() => changePerspective("COORDINATION")}
                      className={`w-full text-left px-3 py-1.5 cursor-pointer flex items-center justify-between ${selectedPerspective === "COORDINATION" ? "bg-zinc-900 text-white font-bold border-l-2 border-l-[#A78BFA]" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      <span className="flex items-center gap-1.5"><CoordinationIcon size={12} className={selectedPerspective === "COORDINATION" ? "text-[#A78BFA]" : "text-zinc-500"} /> COORDINATION</span>
                      <span className="text-[8px] bg-black border border-zinc-800 text-[#A78BFA] px-1 font-mono">HITL</span>
                    </button>
                    <button 
                      onClick={() => changePerspective("INTELLIGENCE")}
                      className={`w-full text-left px-3 py-1.5 cursor-pointer flex items-center justify-between ${selectedPerspective === "INTELLIGENCE" ? "bg-zinc-900 text-white font-bold border-l-2 border-l-zinc-350" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      <span className="flex items-center gap-1.5"><IntelligenceIcon size={12} className={selectedPerspective === "INTELLIGENCE" ? "text-zinc-300" : "text-zinc-500"} /> INTELLIGENCE</span>
                      <span className="text-[8px] bg-black border border-zinc-800 text-zinc-300 px-1 font-mono">VFS</span>
                    </button>
                    <button 
                      onClick={() => changePerspective("AFTER_ACTION")}
                      className={`w-full text-left px-3 py-1.5 cursor-pointer flex items-center justify-between ${selectedPerspective === "AFTER_ACTION" ? "bg-zinc-900 text-white font-bold border-l-2 border-l-red-500" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      <span className="flex items-center gap-1.5"><AfterActionIcon size={12} className={selectedPerspective === "AFTER_ACTION" ? "text-red-500" : "text-zinc-500"} /> AFTER ACTION</span>
                      <span className="text-[8px] bg-black border border-zinc-800 text-red-400 px-1 font-mono">RPL</span>
                    </button>
                    <button 
                      onClick={() => changePerspective("PIPELINE_DESIGNER")}
                      className={`w-full text-left px-3 py-1.5 cursor-pointer flex items-center justify-between ${selectedPerspective === "PIPELINE_DESIGNER" ? `bg-zinc-900 text-white font-bold border-l-2 border-l-[#10B981]` : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      <span className="flex items-center gap-1.5"><PipelineIcon size={12} className={selectedPerspective === "PIPELINE_DESIGNER" ? "text-[#10B981]" : "text-zinc-500"} /> PIPELINE_DSN</span>
                      <span className="text-[8px] bg-black border border-zinc-800 text-[#54FFA6] px-1 font-mono">FLOW</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick diagnostics left base statistics */}
            <div className="p-3 border-t border-zinc-900 bg-black/60 font-mono text-[9.5px] text-zinc-500 mt-auto">
              {/* Anomaly Detection Toggle */}
              <div className="flex justify-between py-1 mb-1 items-center border-b border-zinc-900/50 pb-1.5">
                <span className="uppercase text-zinc-400 font-bold tracking-wider">ANOMALY_TRACKING</span>
                <button 
                  onClick={() => { playSfx("click"); setAnomalyDetectionEnabled(!anomalyDetectionEnabled); }}
                  className={`w-10 h-4 flex items-center px-0.5 cursor-pointer border ${anomalyDetectionEnabled ? "bg-red-950/40 border-red-900 justify-end" : "bg-black border-zinc-800 justify-start"}`}
                >
                  <div className={`w-3 h-3 ${anomalyDetectionEnabled ? "bg-red-500" : "bg-zinc-600"}`} />
                </button>
              </div>

              <div className="flex justify-between py-0.5"><span>HANDSHAKE_LAT</span><span className="text-[#4ADE80] font-bold">12ms</span></div>
              <div className="flex justify-between py-0.5"><span>ENDPOINT_STATE</span><span className="text-[#3B82F6]">ROBUST</span></div>
              <div className="flex justify-between py-0.5"><span>NO-SLOP REG</span><span className="text-zinc-400">ENFORCED</span></div>
            </div>
          </aside>
        )}

        {/* ==================== CENTER STAGE MODULE ==================== */}
        <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
          
          {/* Active Title bar for the operational context */}
          <div className="flex-none p-3 h-12 border-b border-zinc-900 bg-[#090B0B] flex justify-between items-center z-10 select-none">
            <div className="flex items-center gap-2.5">
              <div className={`p-1 px-2 border ${themeColors.borderAccent} bg-black text-[#DEEBE4] font-bold text-[8.5px]`}>
                {activeOperationId}
              </div>
              <div className="min-w-0">
                <h1 className="text-white text-[11.5px] font-bold uppercase tracking-wider font-sans truncate">
                  {activeOperationId === "OPERATION_842" ? "OP_842: ORBITAL_GREENHOUSE_MAPPING_GRID" : "OP_841: NIGHTFALL_ECLIPSE_TELECOMMAND"}
                </h1>
                <p className="text-[8.5px] text-zinc-500 uppercase font-mono tracking-tight">Handshake secure // Parallel sub-thread orchestration engine</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 select-none">
              <span className={`text-[8px] uppercase tracking-wider font-bold bg-[#10B981]/10 border border-[#10B981]/20 ${themeColors.textBright} px-2 py-0.5 hidden sm:inline-block`}>
                COMMAND_CENTER_READY
              </span>
            </div>
          </div>

          <div className="p-4 space-y-4">
            
            {/* The Topological "Operation Sphere" Node Graph */}
            <div className={`border border-zinc-900 bg-[#060807] p-4 relative overflow-hidden h-[300px]`}>
              
              {/* Corner Watermarks */}
              <div className="absolute top-2 left-3 text-[8px] text-zinc-600 font-bold tracking-[0.25em] z-10 uppercase">
                {isTeal ? "COMMON OPERATING TRACKER // ORBITAL INTERSECTS" : "TACTICAL ANALYZER // CHROMOSOME STREAM GRID"}
              </div>
              <div className="absolute top-2 right-3 text-[8px] text-zinc-600 font-mono z-10">
                GRID_SCALE: 2.14x CTR
              </div>

              {/* Graphical Canvas background with orbit paths */}
              <div className="relative h-full w-full flex items-center justify-center">
                
                {/* Visual vectors for links & orbits */}
                <svg className="absolute inset-0 pointer-events-none w-full h-full" style={{ minWidth: "100%", minHeight: "100%" }}>
                  <defs>
                    {/* Subtle micro grid */}
                    <pattern id="microgrid" width="16" height="16" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="16" y2="0" stroke={isTeal ? "#0B1A12" : "#0D1826"} strokeWidth="0.5" />
                      <line x1="0" y1="0" x2="0" y2="16" stroke={isTeal ? "#0B1A12" : "#0D1826"} strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  
                  {/* Grid background */}
                  <rect width="100%" height="100%" fill="url(#microgrid)" />

                  {/* HIGH-FIDELITY ORBITAL GRID DETAILS (Image 1 style) */}
                  {isTeal ? (
                    <>
                      {/* Concentric rotating radar orbits */}
                      <circle cx="50%" cy="50%" r="45" fill="none" stroke="#256247" strokeWidth="0.75" strokeDasharray="5 4" className="opacity-60" />
                      <circle cx="50%" cy="50%" r="90" fill="none" stroke="#164A32" strokeWidth="1" className="opacity-80" />
                      <circle cx="50%" cy="50%" r="130" fill="none" stroke="#0E3221" strokeWidth="0.5" strokeDasharray="14 10" />
                      
                      {/* Trajectory vector cross sectors */}
                      <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#164A32" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-40" />
                      <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#164A32" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-40" />

                      {/* Moving radar scanning line using angle animation */}
                      <line 
                        x1="50%" 
                        y1="50%" 
                        x2={`${50 + 130 * Math.cos((radarRotation * Math.PI) / 180)}%`} 
                        y2={`${50 + 130 * Math.sin((radarRotation * Math.PI) / 180)}%`} 
                        stroke="#10B981" 
                        strokeWidth="1.2" 
                        className="opacity-45" 
                      />

                      {/* Trajectory Curve flows intersecting satellite modules */}
                      <path d="M 120,40 Q 300,100 480,45" fill="none" stroke="#059669" strokeWidth="0.75" className="opacity-40" />
                      <path d="M 120,225 Q 350,150 560,225" fill="none" stroke="#059669" strokeWidth="0.75" className="opacity-40" />
                      <path d="M 80,130 C 250,30 400,240 580,130" fill="none" stroke="#047857" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-50" />
                    </>
                  ) : (
                    <>
                      {/* DENSE MULTI-AXIS TELEMETRY PLOTS GRID (Image 2 style) */}
                      {/* Matrix Coordinate Markers */}
                      <line x1="120" y1="0" x2="120" y2="100%" stroke="#1F2937" strokeWidth="0.75" strokeDasharray="5 5" />
                      <line x1="420" y1="0" x2="420" y2="100%" stroke="#1F2937" strokeWidth="0.75" strokeDasharray="5 5" />
                      <line x1="680" y1="0" x2="680" y2="100%" stroke="#1F2937" strokeWidth="0.75" strokeDasharray="5 5" />
                      
                      {/* Histogram Stem Indicators inside topology mapping */}
                      <path d="M 100,220 L 100,80 M 140,220 L 140,110 M 180,220 L 180,140 M 220,220 L 220,120 M 460,220 L 460,150 M 500,220 L 500,90 M 540,220 L 540,130" fill="none" stroke="#1E40AF" strokeWidth="1" className="opacity-30" />
                      
                      {/* Horizontal coordinate alignments */}
                      <line x1="0" y1="130" x2="100%" y2="130" stroke="#1F2937" strokeWidth="0.5" />
                      
                      <path d="M 50,220 Q 200,90 350,150 T 650,80" fill="none" stroke="#2563EB" strokeWidth="1.25" className="opacity-40" />
                    </>
                  )}

                  {/* Center Node links to perspectives (Strict 90-degree tactical alignments) */}
                  {/* Left Planning (top left) */}
                  <path d="M 235 130 L 155 130 L 155 55 L 75 55" fill="none" stroke={selectedPerspective === "PLANNING" ? themeColors.solidAccent : "#2A2A2F"} strokeWidth="1.5" strokeDasharray={selectedPerspective === "PLANNING" ? "" : "3 3"} />
                  {/* Left Intel (bottom left) */}
                  <path d="M 235 130 L 155 130 L 155 205 L 75 205" fill="none" stroke={selectedPerspective === "INTELLIGENCE" ? "rgb(209,213,219)" : "#2A2A2F"} strokeWidth="1.5" strokeDasharray={selectedPerspective === "INTELLIGENCE" ? "" : "3 3"} />
                  {/* Top Execution */}
                  <path d="M 375 130 L 375 35" fill="none" stroke={selectedPerspective === "EXECUTION" ? "#10B981" : "#2A2A2F"} strokeWidth="1.5" strokeDasharray={selectedPerspective === "EXECUTION" ? "" : "3 3"} />
                  {/* Bottom Telemetry */}
                  <path d="M 375 130 L 375 225" fill="none" stroke={selectedPerspective === "TELEMETRY" ? "#3B82F6" : "#2A2A2F"} strokeWidth="1.5" strokeDasharray={selectedPerspective === "TELEMETRY" ? "" : "3 3"} />
                  {/* Right Coordination (top right) */}
                  <path d="M 515 130 L 595 130 L 595 55 L 675 55" fill="none" stroke={selectedPerspective === "COORDINATION" ? "#A78BFA" : "#2A2A2F"} strokeWidth="1.5" strokeDasharray={selectedPerspective === "COORDINATION" ? "" : "3 3"} />
                  {/* Right After Action (bottom right) */}
                  <path d="M 515 130 L 595 130 L 595 205 L 675 205" fill="none" stroke={selectedPerspective === "AFTER_ACTION" ? "#EF4444" : "#2A2A2F"} strokeWidth="1.5" strokeDasharray={selectedPerspective === "AFTER_ACTION" ? "" : "3 3"} />
                  {/* Left Pipeline (middle left) */}
                  <path d="M 235 130 L 75 130" fill="none" stroke={selectedPerspective === "PIPELINE_DESIGNER" ? themeColors.solidAccent : "#2A2A2F"} strokeWidth="1.5" strokeDasharray={selectedPerspective === "PIPELINE_DESIGNER" ? "" : "3 3"} />
                </svg>

                {/* CENTRAL ACTIVE OPERATION NODE (Glow theme matches) */}
                <div 
                  id="central-operation-node"
                  onClick={() => { playSfx("success"); }}
                  className={`absolute z-10 w-[240px] bg-black border-2 ${isTeal ? "border-[#10B981]" : "border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.15)]"} p-3 hover:border-zinc-350 cursor-pointer text-center rounded-none`}
                >
                  <div className="text-[7.5px] text-zinc-500 uppercase tracking-widest font-bold font-mono">CORE_MUTUAL_OPERATIONS_C2</div>
                  <div className="text-xs text-white font-bold mt-1.5 font-sans tracking-wide">HYPERION_CORE #842</div>
                  <div className="h-px bg-zinc-900 my-2" />
                  <div className="grid grid-cols-2 gap-y-1 text-[9px] text-zinc-400 text-left font-mono">
                    <span>AGENTS_DIR:</span> <span className="text-right text-[#54FFA6] font-bold">3 ACTIVE</span>
                    <span>BURNING_RT:</span> <span className="text-right text-[#A78BFA] font-bold">94%</span>
                    <span>DRIFT_ALIGN:</span> <span className="text-right text-zinc-300">0.004 deg</span>
                    <span>Q_EVAL_MAX:</span> <span className="text-right text-white">0.982</span>
                  </div>
                </div>

                {/* SATELLITE NODES */}
                {/* 1. PLANNING */}
                <div 
                  id="sat-node-planning"
                  onClick={() => changePerspective("PLANNING")}
                  className={`absolute top-[18px] left-[5px] sm:left-[10px] w-[145px] bg-black border-2 px-2.5 py-1.5 cursor-pointer hover:bg-zinc-900/60 transition-colors rounded-none ${selectedPerspective === "PLANNING" ? "border-[#F59E0B] bg-[#FDFAF3]/5" : "border-zinc-900"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-300 tracking-tight text-[10px] flex items-center gap-1.5"><SatelliteIcon size={12} className={selectedPerspective === "PLANNING" ? "text-[#F59E0B]" : "text-zinc-500"} /> PLANNING</span>
                    <span className="w-1.5 h-1.5 bg-[#F59E0B]" />
                  </div>
                  <div className="text-[7.5px] text-zinc-500 mt-0.5 leading-snug">Budgets, Policy Constraints</div>
                </div>
                
                {/* 2. INTELLIGENCE */}
                <div 
                  id="sat-node-intelligence"
                  onClick={() => changePerspective("INTELLIGENCE")}
                  className={`absolute bottom-[18px] left-[5px] sm:left-[10px] w-[145px] bg-black border-2 px-2.5 py-1.5 cursor-pointer hover:bg-zinc-900/60 transition-colors rounded-none ${selectedPerspective === "INTELLIGENCE" ? "border-zinc-400 bg-zinc-900/20" : "border-zinc-900"} `}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-300 tracking-tight text-[10px] flex items-center gap-1.5"><IntelligenceIcon size={12} className={selectedPerspective === "INTELLIGENCE" ? "text-zinc-300" : "text-zinc-500"} /> INTEL_DB</span>
                    <span className="w-1.5 h-1.5 bg-zinc-400" />
                  </div>
                  <div className="text-[7.5px] text-zinc-500 mt-0.5 leading-snug">VFS Embeddings Vector</div>
                </div>
                
                {/* 7. PIPELINE_DESIGNER */}
                <div 
                  id="sat-node-pipelinedesigner"
                  onClick={() => changePerspective("PIPELINE_DESIGNER")}
                  className={`absolute top-[calc(50%-23px)] left-[5px] sm:left-[10px] w-[145px] bg-black border-2 px-2.5 py-1.5 cursor-pointer hover:bg-zinc-900/60 transition-colors rounded-none ${selectedPerspective === "PIPELINE_DESIGNER" ? `border-[#10B981] bg-[#10B981]/5 shadow-[0_0_8px_rgba(16,185,129,0.1)]` : "border-zinc-900"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-300 tracking-tight text-[10px] flex items-center gap-1.5"><PipelineIcon size={12} className={selectedPerspective === "PIPELINE_DESIGNER" ? "text-[#10B981]" : "text-zinc-500"} /> PIPELINE_DSN</span>
                    <span className="w-1.5 h-1.5 bg-[#10B981]" />
                  </div>
                  <div className="text-[7.5px] text-zinc-500 mt-0.5 leading-snug">Interactive Agent DAG Graph</div>
                </div>
                
                {/* 3. EXECUTION */}
                <div 
                  id="sat-node-execution"
                  onClick={() => changePerspective("EXECUTION")}
                  className={`absolute w-[145px] bg-black border-2 px-2.5 py-1.5 cursor-pointer hover:bg-zinc-900/60 transition-colors rounded-none ${selectedPerspective === "EXECUTION" ? "border-[#10B981] bg-[#10B981]/5" : "border-zinc-900"}`}
                  style={{ top: "8px", left: "calc(50% - 72px)" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-300 tracking-tight text-[10px] flex items-center gap-1.5"><RobotIcon size={12} className={selectedPerspective === "EXECUTION" ? "text-[#10B981]" : "text-zinc-500"} /> EXECUTION</span>
                    <span className="w-1.5 h-1.5 bg-[#10B981] animate-pulse" />
                  </div>
                  <div className="text-[7.5px] text-zinc-500 mt-0.5 leading-snug">Coroutine Execution CLI</div>
                </div>
                
                {/* 4. TELEMETRY */}
                <div 
                  id="sat-node-telemetry"
                  onClick={() => changePerspective("TELEMETRY")}
                  className={`absolute w-[145px] bg-black border-2 px-2.5 py-1.5 cursor-pointer hover:bg-zinc-900/60 transition-colors rounded-none ${selectedPerspective === "TELEMETRY" ? "border-[#3B82F6] bg-[#3B82F6]/5" : "border-zinc-900"}`}
                  style={{ bottom: "8px", left: "calc(50% - 72px)" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-300 tracking-tight text-[10px] flex items-center gap-1.5"><TelemetryIcon size={12} className={selectedPerspective === "TELEMETRY" ? "text-[#3B82F6]" : "text-zinc-500"} /> TELEMETRY</span>
                    <span className="w-1.5 h-1.5 bg-[#3B82F6]" />
                  </div>
                  <div className="text-[7.5px] text-zinc-500 mt-0.5 leading-snug">Realtime Q-Tables Live</div>
                </div>
                
                {/* 5. COORDINATION */}
                <div 
                  id="sat-node-coordination"
                  onClick={() => changePerspective("COORDINATION")}
                  className={`absolute top-[18px] right-[5px] sm:right-[10px] w-[145px] bg-black border-2 px-2.5 py-1.5 cursor-pointer hover:bg-zinc-900/60 transition-colors rounded-none ${selectedPerspective === "COORDINATION" ? "border-[#A78BFA] bg-[#A78BFA]/5" : "border-zinc-900"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-300 tracking-tight text-[10px] flex items-center gap-1.5"><CoordinationIcon size={12} className={selectedPerspective === "COORDINATION" ? "text-[#A78BFA]" : "text-zinc-500"} /> COORD_HITL</span>
                    <span className="w-1.5 h-1.5 bg-[#A78BFA]" />
                  </div>
                  <div className="text-[7.5px] text-zinc-500 mt-0.5 leading-snug">Operator Approvals Loop</div>
                </div>
                
                {/* 6. AFTER ACTION */}
                <div 
                  id="sat-node-afteraction"
                  onClick={() => changePerspective("AFTER_ACTION")}
                  className={`absolute bottom-[18px] right-[5px] sm:right-[10px] w-[145px] bg-black border-2 px-2.5 py-1.5 cursor-pointer hover:bg-zinc-900/60 transition-colors rounded-none ${selectedPerspective === "AFTER_ACTION" ? "border-red-500 bg-red-500/5" : "border-zinc-900"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-300 tracking-tight text-[10px] flex items-center gap-1.5"><AfterActionIcon size={12} className={selectedPerspective === "AFTER_ACTION" ? "text-red-500" : "text-zinc-500"} /> AFTER_ACTION</span>
                    <span className="w-1.5 h-1.5 bg-red-500" />
                  </div>
                  <div className="text-[7.5px] text-zinc-500 mt-0.5 leading-snug">Time Scrubber Timeline</div>
                </div>

              </div>
            </div>

            {/* HIGH-DENSITY TACTICAL CONTROL DOCK - Inspired directly by Reference Images */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 border border-zinc-900 bg-black/80 p-3 select-none`}>
              
              {/* Telemetry Instrument 1: Real-time Wave Analyzer (Image 2 smooth crawler style) */}
              <div className="border border-zinc-900 bg-zinc-950 p-2 flex flex-col justify-between">
                <div className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1.5 flex justify-between items-center">
                  <span>WAVEFORM_DRIFT_ANALYSIS</span>
                  <span className={`${themeColors.textBright} font-mono animate-pulse`}>STREAM: LIVE</span>
                </div>
                
                {/* Simulated Crawling SVG Waves Path */}
                <div className="h-10 bg-black/40 border border-zinc-900/60 flex items-center justify-center relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <path 
                      d={`M 0 20 
                          Q 30 ${20 + 12 * Math.sin(((waveOffset + 0) * Math.PI) / 180)} 60 20 
                          T 120 20 
                          T 180 20 
                          T 240 20 
                          T 300 20 
                          T 360 20`} 
                      fill="none" 
                      stroke={themeColors.solidAccent} 
                      strokeWidth="1.25" 
                    />
                    <path 
                      d={`M 0 20 
                          Q 45 ${20 + 8 * Math.cos(((waveOffset + 120) * Math.PI) / 180)} 90 20 
                          T 180 20 
                          T 270 20 
                          T 360 20`} 
                      fill="none" 
                      stroke="#8B5CF6" 
                      strokeWidth="0.75" 
                      strokeDasharray="2 3"
                      className="opacity-50"
                    />
                  </svg>
                  <span className="absolute bottom-1 right-2.5 font-mono text-[7.5px] text-zinc-650">0.999 ALPHA_FREQ</span>
                </div>
                
                <div className="text-[7.5px] text-zinc-500 leading-tight mt-1 truncate">
                  * Resonance calibration: Phase lock alignment delta: {((1.0 - gridStates[0] * 0.002) || 0.999).toFixed(5)}
                </div>
              </div>

              {/* Telemetry Instrument 2: High density status grids (Image 1 sidebars status matrix style) */}
              <div className="border border-zinc-900 bg-zinc-950 p-2">
                <div className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1.5 flex justify-between">
                  <span>COROUTINE_GRID_STATES</span>
                  <span className="text-zinc-600 font-mono">24/24 VALID</span>
                </div>

                <div className="grid grid-cols-8 gap-1">
                  {gridStates.map((state, idx) => {
                    let color = "bg-zinc-900 border border-zinc-805"; // Off
                    let title = `Thread ${idx}: IDLE`;
                    if (state === 1) { color = isTeal ? "bg-[#10B981]" : "bg-[#3B82F6]"; title = `Thread ${idx}: ACTIVE`; }
                    else if (state === 2) { color = "bg-purple-900/60"; title = `Thread ${idx}: QUEUED`; }
                    else if (state === 3) { color = "bg-[#F59E0B]"; title = `Thread ${idx}: PENDING`; }

                    return (
                      <div 
                        key={idx}
                        className={`h-3 w-full transition-colors duration-150 ${color}`}
                        title={title}
                      />
                    );
                  })}
                </div>
                <div className="text-[7px] text-zinc-500 mt-2 flex justify-between">
                  <span>● RECON_POOL_T</span>
                  <span>BURST BUFFER: OK</span>
                </div>
              </div>

              {/* Telemetry Instrument 3: Polar compass aligned drift dials (Compasses in Image 2 bottom rails) */}
              <div className="border border-zinc-900 bg-zinc-950 p-2 flex flex-col justify-between">
                <div className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1">
                  <span>INSTRUMENT_ALIGNMENT_DIALS</span>
                </div>
                
                <div className="flex justify-around items-center h-11 bg-black/40">
                  <div className="flex items-center gap-1">
                    {/* Dial 1 */}
                    <div className="relative w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center">
                      <div 
                        className="absolute w-full h-[1px] bg-[#10B981]" 
                        style={{ transform: `rotate(${radarRotation}deg)` }}
                      />
                      <span className="absolute text-[6.5px] scale-90 text-zinc-600 font-bold">RAD</span>
                    </div>
                    <div className="text-[8px] leading-tight text-zinc-500 font-mono">
                      <p className="text-zinc-300">YAW</p>
                      <p className="text-[7px]">{(radarRotation % 360).toFixed(1)}°</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* Dial 2 */}
                    <div className="relative w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center">
                      <div 
                        className="absolute w-full h-[1px] bg-amber-500" 
                        style={{ transform: `rotate(${-radarRotation * 1.5}deg)` }}
                      />
                      <span className="absolute text-[6.5px] scale-90 text-zinc-600 font-bold">DIR</span>
                    </div>
                    <div className="text-[8px] leading-tight text-zinc-500 font-mono">
                      <p className="text-zinc-300">DRIFT</p>
                      <p className="text-[7px]">{(-radarRotation * 1.5 % 360).toFixed(1)}°</p>
                    </div>
                  </div>
                </div>

                <div className="text-[7.5px] text-zinc-550 truncate mt-1">ALIGN: DOCK_3 // FLOW: STABLE</div>
              </div>

            </div>

            {/* Active Display Panel Surface container */}
            <div className={`border-2 ${themeColors.borderMain} bg-[#0A0B0E] p-4 min-h-[300px] flex flex-col justify-between rounded-none shadow-md`}>
              
              {/* Header inside display Surface */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-4">
                <div className="flex items-center gap-1.5">
                  <Layers size={13} className={isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"} />
                  <span className="text-[12px] font-bold text-white tracking-widest font-sans uppercase">
                    ACTIVE PERSPECTIVE CONTEXT // {selectedPerspective}
                  </span>
                </div>
                <div className="text-[8px] text-zinc-500 font-mono">FILTERS: HANDSHAKE_ON</div>
              </div>

              {/* ----------------- PERSPECTIVE 1: PLANNING ----------------- */}
              {selectedPerspective === "PLANNING" && (
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Objectives checklist */}
                    <div className="space-y-2 border border-zinc-900 p-3 bg-zinc-950/60">
                      <div className="text-[9px] font-bold text-zinc-450 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-2 flex justify-between items-center">
                        <span>Zonal Mission Objectives</span>
                        <CheckSquare size={11} className="text-[#F59E0B]" />
                      </div>
                      <div className="space-y-1.5">
                        {objectives.map((obj) => (
                          <div 
                            key={obj.id} 
                            onClick={() => toggleObjective(obj.id)}
                            className="flex items-start gap-2.5 cursor-pointer select-none group"
                          >
                            <input 
                              type="checkbox" 
                              checked={obj.completed} 
                              readOnly 
                              className="accent-[#F59E0B] mt-0.5 pointer-events-none" 
                            />
                            <span className={`text-[10px] ${obj.completed ? "line-through text-zinc-650 font-bold" : "text-zinc-300 group-hover:text-white"}`}>
                              {obj.text}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2">
                        <button 
                          onClick={() => {
                            playSfx("success");
                            const txt = prompt("Provide new operational policy checklist directive:");
                            if (txt) {
                              setObjectives(prev => [...prev, { id: `obj-${Date.now()}`, text: txt, completed: false }]);
                            }
                          }}
                          className="text-[9px] font-bold text-[#F59E0B] hover:underline uppercase"
                        >
                          [+] INJECT CHECKLIST OBJECTIVE
                        </button>
                      </div>
                    </div>

                    {/* Operational Constraints */}
                    <div className="space-y-3.5 border border-zinc-900 p-3 bg-[#070908]">
                      <div className="text-[9px] font-bold text-zinc-450 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-2">
                        Execution Bounds & Safety Guardrails
                      </div>
                      
                      <div className="space-y-2.5 text-[10px]">
                        <div>
                          <div className="flex justify-between text-zinc-500 mb-1">
                            <span>Max Parallel Budget Burn limit:</span>
                            <span className="text-[#F59E0B] font-bold font-mono">{costLimit}</span>
                          </div>
                          <select 
                            value={costLimit} 
                            onChange={(e) => { playSfx("click"); setCostLimit(e.target.value); }}
                            className="w-full bg-[#0D100E] border border-zinc-800 text-zinc-300 p-1 text-[10px] outline-none"
                          >
                            <option value="$1.00/HR">$1.00/HR (Restricted Security mode)</option>
                            <option value="$2.50/HR">$2.50/HR (Standard Recommended limits)</option>
                            <option value="$5.00/HR">$5.00/HR (High-density telemetry run)</option>
                            <option value="UNLIMITED">Uncapped sandbox development scale</option>
                          </select>
                        </div>

                        <div>
                          <div className="flex justify-between text-zinc-500 mb-1">
                            <span>LLM Maximum Token Parameters context:</span>
                            <span className="text-zinc-400 font-mono">8,192 t</span>
                          </div>
                          <div className="w-full h-1 bg-zinc-950 border border-zinc-900">
                            <div className="h-full bg-amber-500 w-3/4" />
                          </div>
                        </div>

                        <div className="pt-1 select-none flex flex-wrap gap-1.5">
                          <span className="bg-red-500/10 border border-red-500/20 text-red-400 px-1.5 py-0.5 text-[8px] font-bold">FAILOVER: STANDBY</span>
                          <span className={`${isTeal ? "bg-[#10B981]/15 text-[#54FFA6] border-[#10B981]/25" : "bg-blue-500/15 text-[#5CB4FF] border-[#3B82F6]/25"} border px-1.5 py-0.5 text-[8px] font-bold`}>SANDBOXED_NODE</span>
                          <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-1.5 py-0.5 text-[8px] font-bold">AUTOROUTE</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="border border-zinc-900 p-3 bg-zinc-950 space-y-2">
                    <div className="text-[9px] font-bold text-zinc-450 uppercase tracking-widest font-sans">Active System Prompt Directives System Overrides</div>
                    <textarea 
                      className="w-full h-14 bg-black border border-zinc-900 p-2 text-[10px] outline-none text-zinc-300 resize-none font-mono focus:border-zinc-700"
                      placeholder="Enter system prompt guidelines dynamically..."
                      defaultValue='SYSTEM_PROMPT: "ACT_AS_NEURAL_ROUTING_ENGINE_STRICT_ADHERENCE_TO_JSON_SCHEMA_OUTPUT_ONLY"'
                    />
                  </div>
                </div>
              )}

              {/* ----------------- PERSPECTIVE 2: EXECUTION ----------------- */}
              {selectedPerspective === "EXECUTION" && (
                <div className="flex-1 flex flex-col gap-3">
                  
                  {/* Performance Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] select-none">
                    <div className="border border-zinc-900 p-2 bg-zinc-950/60">
                      <div className="text-zinc-500 text-[8px] uppercase font-bold">Target Context Node</div>
                      <div className="text-white font-bold mt-1">MERIDIAN_RECON_SYS</div>
                    </div>
                    <div className="border border-zinc-900 p-2 bg-zinc-950/60">
                      <div className="text-zinc-500 text-[8px] uppercase font-bold">Active Handshake</div>
                      <div className={`font-semibold mt-1 ${isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"}`}>SECURE_LINKED</div>
                    </div>
                    <div className="border border-zinc-900 p-2 bg-zinc-950/60">
                      <div className="text-zinc-500 text-[8px] uppercase font-bold">Thread Utilization</div>
                      <div className="text-[#A78BFA] font-bold mt-1">12 COROUTINES</div>
                    </div>
                    <div className="border border-zinc-900 p-2 bg-zinc-950/60 font-mono">
                      <div className="text-zinc-500 text-[8px] uppercase font-bold">Total Latent Bytes</div>
                      <div className="text-zinc-400 font-bold mt-1">0.0 KB DETECTED</div>
                    </div>
                  </div>

                  {/* Terminal Display Console */}
                  <div className="border border-zinc-900 bg-black flex-1 flex flex-col">
                    <div className="h-6 border-b border-zinc-900 bg-zinc-950 px-2.5 flex justify-between items-center select-none text-[8.5px] text-zinc-500 font-bold">
                      <div className="flex items-center gap-1.5">
                        <Terminal size={11} className={isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"} />
                        <span>OPERATOR_TACTICAL_TELECOMM_STREAM</span>
                      </div>
                      <span className="font-mono">ENCODING: RAW UTF-8</span>
                    </div>

                    <div className="p-3 h-40 overflow-y-auto font-mono text-[10px] space-y-1.5 text-zinc-350 bg-black">
                      {terminalLogs.map((log, index) => (
                        <div key={index} className="leading-snug">
                          {log.startsWith("[OPERATOR@C2]") ? (
                            <span className={isTeal ? "text-[#54FFA6] font-bold" : "text-[#5CB4FF] font-bold"}>{log}</span>
                          ) : log.includes("Error") || log.includes("warning") ? (
                            <span className="text-red-500 font-bold">{log}</span>
                          ) : log.startsWith("[SYSTEM_INIT]") ? (
                            <span className="text-zinc-500 font-bold">{log}</span>
                          ) : (
                            <span>{log}</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Console manual inputs */}
                    <form onSubmit={handleTerminalSubmit} className="h-8 border-t border-zinc-900 bg-zinc-950 flex items-center px-1">
                      <span className="text-zinc-500 px-2 select-none font-bold">{">"}</span>
                      <input 
                        id="terminal-manual-input"
                        type="text" 
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none font-mono text-[10px] text-zinc-200"
                        placeholder="Provide manual override parameter command flags here... (HELP, STATS, EXECUTE Support)"
                      />
                      <button 
                        id="terminal-submit-btn"
                        type="submit" 
                        className="h-6 px-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 hover:text-white transition-colors text-zinc-450 font-sans text-[8.5px] font-bold uppercase tracking-wider cursor-pointer"
                      >
                        SUB_EXEC
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* ----------------- PERSPECTIVE 3: TELEMETRY ----------------- */}
              {selectedPerspective === "TELEMETRY" && (
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    
                    {/* Active evaluation parameters */}
                    <div className="border border-zinc-900 bg-zinc-950/60 p-3 space-y-2.5">
                      <div className="text-[9px] font-bold text-zinc-450 uppercase tracking-widest border-b border-zinc-900 pb-1.5">
                        Handshake Streams
                      </div>
                      <div className="space-y-2 text-[10px]">
                        <div className="flex justify-between items-center">
                          <span>STREAM_EVALUATION</span>
                          <input 
                            type="checkbox" 
                            checked={telemetryLive} 
                            onChange={(e) => { playSfx("click"); setTelemetryLive(e.target.checked); }}
                            className="accent-[#3B82F6]" 
                          />
                        </div>
                        <div className="flex justify-between items-center opacity-85">
                          <span>FAILOVER_REDUNDANCY</span>
                          <input type="checkbox" defaultChecked className="accent-[#3B82F6]" />
                        </div>
                        <div className="flex justify-between items-center opacity-80">
                          <span>LATENCY_CALIBRATION</span>
                          <input type="checkbox" defaultChecked className="accent-[#3B82F6]" />
                        </div>
                      </div>
                    </div>

                    {/* Latency Matrix */}
                    <div className="border border-zinc-900 bg-zinc-950/60 p-3 flex flex-col justify-between">
                      <div className="text-[9px] font-bold text-zinc-450 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-2">
                        System Latency Matrix
                      </div>
                      <div className="space-y-1.5 text-[10px] font-mono">
                        <div className="flex justify-between"><span>Google API Cluster</span> <span className={`${themeColors.textBright} font-bold`}>11.4ms</span></div>
                        <div className="flex justify-between text-zinc-500"><span>Anthropic Nodes</span> <span>42.1ms</span></div>
                        <div className="flex justify-between text-zinc-550"><span>OpenAI Routing</span> <span>108.5ms</span></div>
                      </div>
                      <div className="mt-2 text-[7.5px] text-zinc-650 leading-snug">
                        * Telecommand routing uses Gemini models by default to stay within active 50ms constraints sandbox boundary limit.
                      </div>
                    </div>

                    {/* Evaluation Q-Table representation */}
                    <div className="border border-zinc-900 bg-zinc-950/60 p-3">
                      <div className="text-[9px] font-bold text-zinc-450 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-2 flex justify-between">
                        <span>Model Q-Tables Heatmap</span>
                        <Zap size={11} className={isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"} />
                      </div>
                      
                      <div className="grid grid-cols-4 gap-1">
                        <div className={`h-6 ${isTeal ? "bg-[#10B981]" : "bg-[#3B82F6]"} flex items-center justify-center text-[7.5px] text-black font-bold font-mono`} title="Node 01: Host API input">95%</div>
                        <div className={`h-6 ${isTeal ? "bg-[#10B981]/70" : "bg-[#3B82F6]/70"} flex items-center justify-center text-[7.5px] text-black font-bold font-mono`} title="Node 02: Synthesis core">70%</div>
                        <div className={`h-6 ${isTeal ? "bg-[#10B981]/40" : "bg-[#3B82F6]/40"} flex items-center justify-center text-[7.5px] text-zinc-300 font-bold font-mono`} title="Node 03: Support fall">40%</div>
                        <div className="h-6 bg-zinc-900 border border-zinc-850 flex items-center justify-center text-[7.5px] text-zinc-600 font-mono">0%</div>

                        <div className={`h-6 ${isTeal ? "bg-[#10B981]/90" : "bg-[#3B82F6]/90"} flex items-center justify-center text-[7.5px] text-black font-bold font-mono`} title="Handshake matrix">90%</div>
                        <div className={`h-6 ${isTeal ? "bg-[#10B981]/50" : "bg-[#3B82F6]/50"} flex items-center justify-center text-[7.5px] text-black font-bold font-mono`} title="Backup thread">50%</div>
                        <div className="h-6 bg-zinc-900 border border-zinc-850 flex items-center justify-center text-[7.5px] text-zinc-600 font-mono">0%</div>
                        <div className="h-6 bg-zinc-900 border border-zinc-850 flex items-center justify-center text-[7.5px] text-zinc-600 font-mono">0%</div>
                      </div>
                      <div className="text-[7.5px] text-zinc-550 mt-1.5 text-center uppercase tracking-wider">% PROBABILITY OF HIGH HANDSHAKE FIDELITY</div>
                    </div>

                  </div>

                  {/* Real-time Telemetry Heatmap & Multi-line performance Chart */}
                  <div className="border border-zinc-900 bg-zinc-950/60 p-3.5 space-y-3 rounded-none">
                    <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-2 flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <TelemetryIcon size={12} className={themeColors.textBright} />
                        <span>TELEMETRY HEATMAP // METRIC PROPAGATION SIGNAL TRENDS</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button 
                          onClick={() => {
                            playSfx("click");
                            setTrendAnalysisEnabled(!trendAnalysisEnabled);
                          }}
                          className={`bg-black border hover:bg-zinc-800 px-2 py-0.5 text-[8px] font-mono cursor-pointer transition-colors ${
                            trendAnalysisEnabled ? "border-[#3B82F6] text-[#5CB4FF]" : "border-zinc-750 text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          TREND: {trendAnalysisEnabled ? "ON" : "OFF"}
                        </button>
                        <button 
                          onClick={() => {
                            playSfx("click");
                            setTelemetryLive(!telemetryLive);
                          }}
                          className={`bg-black border hover:bg-zinc-800 px-2 py-0.5 text-[8px] font-mono cursor-pointer transition-colors ${
                            telemetryLive ? "border-[#10B981]/50 text-[#10B981] hover:text-[#54FFA6]" : "border-red-500/50 text-red-400 hover:text-red-350"
                          }`}
                        >
                          {telemetryLive ? "PAUSE STREAM" : "RESUME STREAM"}
                        </button>
                        <button 
                          onClick={() => {
                            playSfx("success");
                            const blob = new Blob([JSON.stringify(telemetryChartData, null, 2)], { type: "application/json" });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = `telemetry-export-${Date.now()}.json`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                          }}
                          className="bg-black border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white px-2 py-0.5 text-[8px] font-mono cursor-pointer"
                        >
                          EXPORT JSON
                        </button>
                        <button 
                          onClick={() => {
                            playSfx("success");
                            const headers = "Time,Gemini Tokens,Claude Tokens,GPT Tokens,Gemini Latency,Claude Latency,GPT Latency\n";
                            const rows = telemetryChartData.map(d => 
                              `${d.time},${d.geminiTokens},${d.claudeTokens},${d.gptTokens},${d.geminiLatency},${d.claudeLatency},${d.gptLatency}`
                            ).join("\n");
                            const blob = new Blob([headers + rows], { type: "text/csv" });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = `telemetry-export-${Date.now()}.csv`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                          }}
                          className="bg-black border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white px-2 py-0.5 text-[8px] font-mono cursor-pointer"
                        >
                          EXPORT CSV
                        </button>
                        <div className="flex items-center gap-1">
                          <span className={`w-1.5 h-1.5 ${telemetryLive ? "bg-[#10B981] animate-ping" : "bg-red-500"}`} />
                          <span className="text-[8px] text-zinc-500 font-mono">STATUS: {telemetryLive ? "LIVE_SYNCHRONIZED" : "STREAM_PAUSED"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Real-time stats display bar - high-fidelity metrics readout */}
                    {isClientMounted && telemetryChartData.length > 0 && (() => {
                      const currentPoint = telemetryChartData[telemetryChartData.length - 1];
                      return (
                        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 bg-black/40 border border-zinc-900/60 p-2 text-mono font-mono text-[9px] text-zinc-400">
                          <div>
                            <div className="text-zinc-650 text-[8px] uppercase">GEMINI_TKN</div>
                            <div className="font-bold text-emerald-400">{currentPoint.geminiTokens} <span className="text-zinc-600 font-normal">t/s</span></div>
                          </div>
                          <div>
                            <div className="text-zinc-650 text-[8px] uppercase">CLAUDE_TKN</div>
                            <div className="font-bold text-purple-400">{currentPoint.claudeTokens} <span className="text-zinc-600 font-normal">t/s</span></div>
                          </div>
                          <div>
                            <div className="text-zinc-650 text-[8px] uppercase">GPT_TKN</div>
                            <div className="font-bold text-red-500">{currentPoint.gptTokens} <span className="text-zinc-600 font-normal">t/s</span></div>
                          </div>
                          <div>
                            <div className="text-zinc-650 text-[8px] uppercase">GEMINI_LATENCY</div>
                            <div className="font-bold text-blue-400">{currentPoint.geminiLatency} <span className="text-zinc-600 font-normal">ms</span></div>
                          </div>
                          <div>
                            <div className="text-zinc-650 text-[8px] uppercase">CLAUDE_LATENCY</div>
                            <div className="font-bold text-amber-500">{currentPoint.claudeLatency} <span className="text-zinc-600 font-normal">ms</span></div>
                          </div>
                          <div>
                            <div className="text-zinc-650 text-[8px] uppercase">GPT_LATENCY</div>
                            <div className="font-bold text-[#FF007F]">{currentPoint.gptLatency} <span className="text-zinc-600 font-normal">ms</span></div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Recharts Multi-line Graph Container */}
                    <div className="h-[210px] w-full relative">
                      {!isClientMounted ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 font-mono text-[9px] bg-black/35 border border-zinc-900">
                          <span className="animate-pulse">▶ [SYS_LOAD] ESTABLISHING SIGNAL GRAPH COROUTINES...</span>
                        </div>
                      ) : (() => {
                        const enrichedChartData = telemetryChartData.map((d, index) => {
                          let geminiSum = 0, geminiCount = 0;
                          for (let i = Math.max(0, index - 4); i <= index; i++) {
                            geminiSum += telemetryChartData[i].geminiLatency;
                            geminiCount++;
                          }
                          const geminiMA = geminiCount > 0 ? parseFloat((geminiSum / geminiCount).toFixed(2)) : d.geminiLatency;

                          let claudeSum = 0, claudeCount = 0;
                          for (let i = Math.max(0, index - 4); i <= index; i++) {
                            claudeSum += telemetryChartData[i].claudeLatency;
                            claudeCount++;
                          }
                          const claudeMA = claudeCount > 0 ? parseFloat((claudeSum / claudeCount).toFixed(2)) : d.claudeLatency;

                          let gptSum = 0, gptCount = 0;
                          for (let i = Math.max(0, index - 4); i <= index; i++) {
                            gptSum += telemetryChartData[i].gptLatency;
                            gptCount++;
                          }
                          const gptMA = gptCount > 0 ? parseFloat((gptSum / gptCount).toFixed(2)) : d.gptLatency;

                          return {
                            ...d,
                            geminiMA,
                            claudeMA,
                            gptMA,
                          };
                        });

                        return (
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              data={enrichedChartData}
                              margin={{ top: 12, right: 12, left: -24, bottom: 5 }}
                            >
                              <CartesianGrid stroke="#141C2B" strokeDasharray="2 2" vertical={false} />
                              <XAxis 
                                dataKey="time" 
                                stroke="#141C2B" 
                                tick={{ fill: '#556B7D', fontSize: 8, fontFamily: 'monospace' }}
                                axisLine={false} 
                              />
                              <YAxis 
                                yAxisId="left" 
                                stroke="#A78BFA" 
                                tick={{ fill: '#A78BFA', fontSize: 8, fontFamily: 'monospace' }} 
                                axisLine={false}
                                tickLine={false}
                              />
                              <YAxis 
                                yAxisId="right" 
                                orientation="right" 
                                stroke="#3B82F6" 
                                tick={{ fill: '#5CB4FF', fontSize: 8, fontFamily: 'monospace' }} 
                                axisLine={false}
                                tickLine={false}
                              />
                              <Tooltip content={<CustomTooltip />} />
                              <Legend 
                                content={({ payload }) => (
                                  <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[8.5px] font-mono uppercase mt-2">
                                    {payload?.map((entry: any) => (
                                      <div key={entry.value} className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5" style={{ backgroundColor: entry.color }} />
                                        <span className="text-zinc-400">{entry.value}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              />
                              <Line 
                                yAxisId="left" 
                                type="monotone" 
                                dataKey="geminiTokens" 
                                name="Gemini Tokens" 
                                stroke="#10B981" 
                                strokeWidth={1.5} 
                                dot={false} 
                                activeDot={{ r: 3 }}
                              />
                              <Line 
                                yAxisId="left" 
                                type="monotone" 
                                dataKey="claudeTokens" 
                                name="Claude Tokens" 
                                stroke="#A78BFA" 
                                strokeWidth={1.5} 
                                dot={false} 
                                activeDot={{ r: 3 }}
                              />
                              <Line 
                                yAxisId="left" 
                                type="monotone" 
                                dataKey="gptTokens" 
                                name="GPT Tokens" 
                                stroke="#EF4444" 
                                strokeWidth={1.5} 
                                dot={false} 
                                activeDot={{ r: 3 }}
                              />
                              <Line 
                                yAxisId="right" 
                                type="monotone" 
                                dataKey="geminiLatency" 
                                name="Gemini Lat" 
                                stroke={anomalyDetectionEnabled ? (telemetryChartData[telemetryChartData.length - 1]?.geminiLatency > 40 ? "#EF4444" : telemetryChartData[telemetryChartData.length - 1]?.geminiLatency > 30 ? "#F59E0B" : "#10B981") : "#3984E6"} 
                                strokeWidth={1.2} 
                                strokeDasharray="3 3" 
                                dot={false} 
                                activeDot={{ r: 3 }}
                              />
                              <Line 
                                yAxisId="right" 
                                type="monotone" 
                                dataKey="claudeLatency" 
                                name="Claude Lat" 
                                stroke={anomalyDetectionEnabled ? (telemetryChartData[telemetryChartData.length - 1]?.claudeLatency > 80 ? "#EF4444" : telemetryChartData[telemetryChartData.length - 1]?.claudeLatency > 60 ? "#F59E0B" : "#10B981") : "#F59E0B"} 
                                strokeWidth={1.2} 
                                strokeDasharray="3 3" 
                                dot={false} 
                                activeDot={{ r: 3 }}
                              />
                              <Line 
                                yAxisId="right" 
                                type="monotone" 
                                dataKey="gptLatency" 
                                name="GPT Lat" 
                                stroke={anomalyDetectionEnabled ? (telemetryChartData[telemetryChartData.length - 1]?.gptLatency > 140 ? "#EF4444" : telemetryChartData[telemetryChartData.length - 1]?.gptLatency > 110 ? "#F59E0B" : "#10B981") : "#FF007F"} 
                                strokeWidth={1.2} 
                                strokeDasharray="3 3" 
                                dot={false} 
                                activeDot={{ r: 3 }}
                              />

                              {trendAnalysisEnabled && (
                                <>
                                  <Line 
                                    yAxisId="right" 
                                    type="monotone" 
                                    dataKey="geminiMA" 
                                    name="Gemini Lat MA" 
                                    stroke="#3984E6" 
                                    strokeWidth={1} 
                                    strokeDasharray="4 4" 
                                    dot={false} 
                                    opacity={0.7}
                                    activeDot={false}
                                  />
                                  <Line 
                                    yAxisId="right" 
                                    type="monotone" 
                                    dataKey="claudeMA" 
                                    name="Claude Lat MA" 
                                    stroke="#F59E0B" 
                                    strokeWidth={1} 
                                    strokeDasharray="4 4" 
                                    dot={false} 
                                    opacity={0.7}
                                    activeDot={false}
                                  />
                                  <Line 
                                    yAxisId="right" 
                                    type="monotone" 
                                    dataKey="gptMA" 
                                    name="GPT Lat MA" 
                                    stroke="#FF007F" 
                                    strokeWidth={1} 
                                    strokeDasharray="4 4" 
                                    dot={false} 
                                    opacity={0.7}
                                    activeDot={false}
                                  />
                                </>
                              )}
                            </LineChart>
                          </ResponsiveContainer>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Core Live Events Matrix */}
                  <div className="border border-zinc-900 bg-zinc-950 p-2 text-[10px]">
                    <div className="text-[9px] font-bold text-zinc-450 uppercase tracking-widest mb-1.5">Live Evaluation Events Stream Log</div>
                    <div className="h-16 overflow-y-auto font-mono text-[9px] divide-y divide-zinc-900 space-y-1 bg-black/30 px-1.5">
                      <div className="flex justify-between py-1 text-[#4ADE80]">
                        <span>[12:04:36] PIPELINE_RESOLVED_SUCCESS {"->"} Zonal context metrics synchronizing smoothly</span>
                        <span>GRID_01</span>
                      </div>
                      <div className="flex justify-between py-1 text-[#F59E0B]">
                        <span>[12:04:33] WARNING_FAILOVER_ENGAGED {"->"} Swapped target to Google fallback cluster</span>
                        <span>GRID_01</span>
                      </div>
                      <div className="flex justify-between py-1 text-red-500 font-bold">
                        <span>[12:04:31] EXCEPTION_TIMEOUT_BREACHED {"->"} Primary Anthropic node failed response threshold</span>
                        <span>ROUTER_02</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

               {/* ----------------- PERSPECTIVE 4: COORDINATION ----------------- */}
              {selectedPerspective === "COORDINATION" && (
                <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_420px] gap-3 text-[10px]">
                  
                  {/* Left Column: Operator Approval Queue */}
                  <div className="space-y-3 flex flex-col overflow-y-auto">
                    <div className="text-zinc-450 text-[10px] leading-relaxed select-none">
                      Human-in-the-Loop approval loops. Manually override or forward critical execution trajectories, database operations, or API broadcasts below:
                    </div>

                    <div className="border border-zinc-900 bg-zinc-950/40 divide-y divide-zinc-900 font-mono leading-relaxed select-none grow">
                      {approvals.map((req) => (
                        <div key={req.id} className="p-3.5 grid grid-cols-1 md:grid-cols-[120px_1fr_120px] gap-2 items-center">
                          <div>
                            <div className="text-zinc-650 text-[7px] uppercase font-bold">PROPOSING_AGENT</div>
                            <div className="font-bold text-zinc-300">{req.agent}</div>
                            <div className="text-zinc-500 text-[8.5px]">{req.id}</div>
                          </div>
                          <div>
                            <div className="text-zinc-650 text-[7px] uppercase font-bold">DIRECTIVE_ACTION_PAYLOAD</div>
                            <div className="text-white font-bold">{req.action}</div>
                            <div className="bg-black text-[9px] p-2 border border-zinc-900 rounded-none mt-1 text-zinc-450 break-all select-all font-mono leading-normal whitespace-pre">
                              {req.payload}
                            </div>
                          </div>
                          <div className="flex gap-1.5 justify-end mt-2 md:mt-0">
                            {req.status === "PENDING" ? (
                              <>
                                <button 
                                  onClick={() => handleApprovalAction(req.id, "REJECTED")}
                                  className="px-2.5 py-1 bg-red-950/60 hover:bg-red-900 border border-red-800 text-red-400 font-bold text-[8.5px] cursor-pointer rounded-none"
                                >
                                  REJECT
                                </button>
                                <button 
                                  onClick={() => handleApprovalAction(req.id, "APPROVED")}
                                  className="px-2.5 py-1 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800 text-[#54FFA6] font-bold text-[8.5px] cursor-pointer rounded-none"
                                >
                                  APPROVE
                                </button>
                              </>
                            ) : (
                              <span className={`px-2 py-0.5 text-[8px] font-bold border rounded-none ${req.status === "APPROVED" ? "bg-emerald-950 text-[#54FFA6] border-emerald-800/60" : "bg-red-950 text-red-400 border-red-800/60"}`}>
                                {req.status}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Telegram Bridge Plugin Panel */}
                  <div className="border border-zinc-900 bg-black/60 p-3.5 space-y-3.5 flex flex-col rounded-none relative">
                    
                    {/* Header */}
                    <div className="border-b border-zinc-900 pb-2.5 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest select-none">
                      <div className="flex items-center gap-2">
                        <span className="text-[#54FFA6]">🛰️ TELEGRAM_C2_BRIDGE</span>
                        <span className="text-zinc-700">v1.2</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 bg-black px-2 py-0.5 border border-zinc-900 text-[8px]">
                        <span className={`w-1.5 h-1.5 inline-block ${telegramStatus === "CONNECTED" ? "bg-[#10B981] animate-pulse" : telegramStatus === "CONNECTING" ? "bg-amber-400 animate-pulse" : "bg-red-500"}`} />
                        <span className="text-zinc-400">{telegramStatus}</span>
                      </div>
                    </div>

                    {/* Inputs parameters */}
                    <div className="space-y-2 text-[9px]">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-zinc-500 font-bold mb-1 uppercase text-[7.5px]">TELEGRAM_BOT_TOKEN</label>
                          <input 
                            type="password"
                            value={telegramBotToken}
                            onChange={(e) => setTelegramBotToken(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-700 outline-none p-1.5 text-white font-mono text-[9px] rounded-none"
                            placeholder="7192834015:AA..."
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-500 font-bold mb-1 uppercase text-[7.5px]">TELEGRAM_CHAT_ID</label>
                          <input 
                            type="text"
                            value={telegramChatId}
                            onChange={(e) => setTelegramChatId(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-700 outline-none p-1.5 text-white font-mono text-[9px] rounded-none"
                            placeholder="@admin_channel or chat_id"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-1">
                        <button 
                          onClick={handleTelegramTestConnect}
                          className="h-6 px-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 font-bold text-[8px] uppercase tracking-wider cursor-pointer transition-colors"
                        >
                          INITIALIZE & LINK PLUGIN
                        </button>

                        <div className="flex items-center gap-1.5 select-none">
                          <span className="text-zinc-500 uppercase text-[8px] font-bold">AUTO_FORWARD:</span>
                          <input 
                            type="checkbox"
                            checked={telegramAutoForward}
                            onChange={(e) => { playSfx("click"); setTelegramAutoForward(e.target.checked); }}
                            className="accent-[#10B981] h-3 w-3 cursor-pointer"
                            id="telegram-auto-forward-checkbox"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Chat Logs Screen (Notifications / Messages Exchange) */}
                    <div className="flex-1 min-h-[120px] bg-black border border-zinc-900 p-2 flex flex-col space-y-2 overflow-y-auto font-mono text-[9px] max-h-[140px] scrollbar-thin">
                      <div className="text-zinc-650 font-bold border-b border-zinc-950 pb-1 text-[7.5px] uppercase">Telemetry Message Feed:</div>
                      <div className="space-y-1.5 grow overflow-y-auto">
                        {telegramMessages.map((m) => (
                          <div key={m.id} className={`p-1.5 leading-snug rounded-none text-left ${m.direction === "out" ? "bg-zinc-900/40 text-emerald-450 border-l border-emerald-700/60 pl-2" : "bg-black text-purple-300 border-l border-purple-800/60 pl-2"}`}>
                            <div className="flex justify-between items-center text-[7.5px] text-zinc-500 mb-0.5">
                              <span>{m.direction === "out" ? "▲ TRANS_OUTBOUND" : "▼ TRANS_INBOUND"}</span>
                              <span>{m.timestamp}</span>
                            </div>
                            <div className="break-words font-medium">{m.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compose Dispatch input */}
                    <div className="space-y-1.5">
                      <label className="block text-zinc-500 font-bold uppercase text-[7.5px]">MANUAL OVERRIDE DISPATCH SIGNAL COMPOSE</label>
                      <div className="flex border border-zinc-900 bg-zinc-950 p-1">
                        <textarea 
                          value={telegramInputText}
                          onChange={(e) => setTelegramInputText(e.target.value)}
                          rows={2}
                          className="flex-1 bg-transparent border-none outline-none text-zinc-200 text-[9.5px] p-1 font-mono resize-none focus:ring-0 placeholder-zinc-750"
                          placeholder="Type coordinate details to forward directly to active Telegram bot sync channels..."
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <button 
                          onClick={() => { setTelegramInputText("🛰️ System operational level diagnostics requested. All telemetry green."); playSfx("click"); }}
                          className="text-[7.5px] font-bold text-zinc-505 hover:text-zinc-300 transition-colors uppercase border border-zinc-955 px-1 bg-zinc-950"
                        >
                          PRESET_DIAGNOSTICS
                        </button>
                        <button 
                          onClick={() => handleTelegramSend()}
                          disabled={!telegramBotToken || telegramStatus === "CONNECTING"}
                          className="h-6 px-4 bg-emerald-950/70 border border-emerald-800 text-[#54FFA6] hover:bg-emerald-900 font-bold text-[8.5px] uppercase tracking-wider cursor-pointer select-none transition-colors disabled:opacity-55 disabled:cursor-not-allowed"
                        >
                          DISPATCH_SIGNAL
                        </button>
                      </div>
                    </div>

                    {/* Console Logger for System Statuses */}
                    <div className="bg-black/90 p-2 border border-zinc-900 font-mono text-[8.5px] text-zinc-400 h-[80px] overflow-y-auto scrollbar-none select-text text-left">
                      <div className="text-[7.5px] font-bold text-zinc-600 mb-1">TELEGRAM_LOCAL_LOGGER:</div>
                      {telegramLogs.map((log, i) => (
                        <div key={i} className="font-mono leading-tight border-b border-zinc-950/20 py-0.5">
                          {log.startsWith("[ERROR]") ? (
                            <span className="text-red-500">{log}</span>
                          ) : log.startsWith("[CONNECTED]") || log.startsWith("[SUCCESS]") ? (
                            <span className="text-emerald-400">{log}</span>
                          ) : (
                            <span>{log}</span>
                          )}
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              )}

              {/* ----------------- PERSPECTIVE 5: INTELLIGENCE ----------------- */}
              {selectedPerspective === "INTELLIGENCE" && (
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    
                    {/* Source indexes */}
                    <div className="border border-zinc-900 p-2.5 bg-zinc-950/60 space-y-1 select-none">
                      <div className="text-[9px] font-bold text-zinc-455 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-2 flex justify-between">
                        <span>Ingested Sources</span>
                        <Database size={11} className="text-zinc-500" />
                      </div>
                      {files.map((file) => (
                        <div 
                          key={file.name} 
                          onClick={() => { playSfx("click"); setSelectedFile(file); }}
                          className={`p-1.5 cursor-pointer text-[10px] flex justify-between ${selectedFile.name === file.name ? `bg-zinc-900 text-white font-bold` : "text-zinc-500 hover:text-zinc-300"}`}
                        >
                          <span className="flex items-center gap-1.5"><DocumentIcon size={12} className="text-zinc-500" /> {file.name}</span>
                          <span>{file.size}</span>
                        </div>
                      ))}
                    </div>

                    {/* Source Payload workspace */}
                    <div className="border border-zinc-900 bg-zinc-950/40 flex flex-col justify-between">
                      <div className="h-7 border-b border-zinc-900 bg-zinc-900/60 px-3 flex justify-between items-center text-[9.5px] font-mono select-none">
                        <span className="font-bold text-zinc-300">File Ingest Content Payload: {selectedFile.name} (FORMAT: {selectedFile.type})</span>
                        <span className="text-zinc-550">READONLY_VFS_PLANE</span>
                      </div>
                      
                      <div className="p-3 bg-black text-[9.5px] text-zinc-305 overflow-y-auto h-32 leading-relaxed whitespace-pre-wrap font-mono">
                        {selectedFile.content}
                      </div>

                      <div className="h-7 border-t border-zinc-900 bg-zinc-900/60 px-3 flex items-center justify-between text-[8px] text-zinc-500 font-mono select-none">
                        <span>VECTOR_RECON_INDEX: 4,129 ACTIVE TOKENS</span>
                        <span>COSINE_ALIGN: 0.941</span>
                      </div>
                    </div>

                  </div>

                  {/* Vector DB simulator */}
                  <div className="border border-zinc-900 p-3 bg-zinc-950/60 space-y-2 select-none">
                    <div className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                      <span className="text-[9px] font-bold text-zinc-450 uppercase tracking-widest">Similarity Search Embeddings Diagnostic</span>
                      <span className="text-[8px] text-zinc-500">ENGINE_ALGORITHM: COSINE_SM_L2</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[10px] font-mono">
                      <div className="p-2 bg-black border border-zinc-900 flex justify-between">
                        <span>/api/v1/schema.ingest</span>
                        <span className={`${themeColors.textBright} font-bold`}>0.985 COS</span>
                      </div>
                      <div className="p-2 bg-black border border-zinc-900 flex justify-between">
                        <span>/api/v1/auth.guard</span>
                        <span className={`${themeColors.textBright} font-bold`}>0.824 COS</span>
                      </div>
                      <div className="p-2 bg-black border border-zinc-900 flex justify-between opacity-50">
                        <span>/api/v1/users.profile</span>
                        <span className="text-zinc-650 font-bold">0.142 COS</span>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* ----------------- PERSPECTIVE 6: AFTER ACTION ----------------- */}
              {selectedPerspective === "AFTER_ACTION" && (
                <div className="flex-1 space-y-4">
                  {/* Timeline Scrubber */}
                  <div className="text-zinc-400 text-[10px] leading-relaxed border border-zinc-900/40 p-3 bg-zinc-950/60 select-none">
                    Use the console timeline scrubber controls below to replay, analyze and scrub through historical traces of <span className="text-red-400 font-bold">Execution Run #2387</span>:
                  </div>

                  <div className="border border-zinc-900 bg-[#06070a] p-4 space-y-3.5 rounded-none shadow">
                    <div className="flex justify-between text-[10px] select-none">
                      <span className="font-bold text-zinc-300">Run Replay Scrubber Control</span>
                      <span className="text-red-400 font-mono font-bold uppercase tracking-widest bg-red-950/20 border border-red-900 px-2.5 py-0.5">
                        REPLAY STEP {replayIndex + 1} OF {TIMELINE_REPLAY_EVENTS.length}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <input 
                        type="range" 
                        min={0} 
                        max={TIMELINE_REPLAY_EVENTS.length - 1} 
                        value={replayIndex}
                        onChange={(e) => { playSfx("click"); setReplayIndex(Number(e.target.value)); }}
                        className="w-full h-1.5 bg-zinc-900 border border-zinc-800 rounded-none appearance-none cursor-pointer accent-red-500" 
                      />
                      <div className="flex justify-between text-[7.5px] text-zinc-550 font-mono select-none">
                        <span>12:04:21 (SPAWN)</span>
                        <span>12:04:29 (YIELD)</span>
                        <span>12:04:31 (TIMEOUT)</span>
                        <span>12:04:33 (RETRY fail)</span>
                        <span>12:04:40 (COMMIT ok)</span>
                      </div>
                    </div>
                  </div>

                  {/* Scrub Trace Display */}
                  <div className="border border-zinc-900 bg-black p-3.5 text-[10px] font-mono leading-relaxed">
                    <div className="text-zinc-500 text-[8px] uppercase border-b border-zinc-900 pb-1 mb-2 font-bold select-none">SCRUBBED_STEP_TRACE_DIAGNOSTICS</div>
                    <div className="grid grid-cols-[110px_1fr] gap-y-2">
                      <span className="text-zinc-500 select-none">UTC_TIMESTAMP</span>
                      <span className="text-white font-mono">{TIMELINE_REPLAY_EVENTS[replayIndex].time}</span>
                      
                      <span className="text-zinc-500 select-none">STATE_TYPE</span>
                      <span className="font-bold uppercase tracking-widest text-red-400">{TIMELINE_REPLAY_EVENTS[replayIndex].type}</span>
                      
                      <span className="text-zinc-500 select-none">TRACE_SUMMARY</span>
                      <span className="text-zinc-200">{TIMELINE_REPLAY_EVENTS[replayIndex].message}</span>
                    </div>
                  </div>

                </div>
              )}

              {/* ----------------- PERSPECTIVE 7: PIPELINE DESIGNER ----------------- */}
              {selectedPerspective === "PIPELINE_DESIGNER" && (
                <div className="flex-1 flex flex-col space-y-4">
                  
                  {/* Top Control Panel Info Row */}
                  <div className="flex flex-col md:flex-row gap-3 justify-between items-start md:items-center bg-[#070908] border border-zinc-900 p-3">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-zinc-350 tracking-wider flex items-center gap-1.5 uppercase">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        Meridian Live Workstream Graph Daemon // ACTIVE_SYS_ROUTING
                      </div>
                      <p className="text-[8.5px] text-zinc-500 leading-normal max-w-xl">
                        Design multi-agent autonomous loops by drawing connection vectors. Reposition agent task blocks with mouse coordinates, and execute sequences step-by-step.
                      </p>
                    </div>
                    
                    {/* Diagnostic Status Indicators */}
                    <div className="flex flex-wrap gap-2 text-[8px] font-mono select-none">
                      <div className="bg-zinc-950 border border-zinc-850 px-2 py-0.5 text-zinc-400">
                        DAG_VALIDATION: <span className="text-[#54FFA6] font-bold">PASSING</span>
                      </div>
                      <div className="bg-zinc-950 border border-zinc-850 px-2 py-0.5 text-zinc-400">
                        VIRTUAL_CIRCUITS: <span className="text-[#5CB4FF] font-bold">{pipelineConnections.length} ACTIVE</span>
                      </div>
                      <div className="bg-zinc-950 border border-zinc-850 px-2 py-0.5 text-zinc-400">
                        CONNECTION_MODE: <span className={selectedOutputNodeId ? "text-amber-400 font-bold animate-pulse" : "text-zinc-500"}>
                          {selectedOutputNodeId ? "LINK_ENGAGED" : "LISTENING"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Node Workspace Layout & Form controls */}
                  <div className="grid grid-cols-1 xl:grid-cols-[1fr_220px] gap-4">
                    
                    {/* The Interactive Canvas Area */}
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-center bg-zinc-950/80 px-3 py-1.5 border border-zinc-900">
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                          Operational Canvas (drag nodes / click ports to connect)
                        </span>
                        
                        {/* State Prompt */}
                        {selectedOutputNodeId && (
                          <span className="text-[8.5px] text-[#F59E0B] font-bold uppercase tracking-wider animate-pulse font-mono">
                            <AlertIcon size={12} className="text-[#F59E0B] mr-1 inline-block animate-pulse" /> [LINK_ENGAGED] Click any node&apos;s &quot;IN&quot; port to bind workflow vector.
                          </span>
                        )}
                      </div>

                      <div 
                        id="pipeline-canvas-container"
                        className="relative h-[420px] bg-[#050608] border-2 border-zinc-900 overflow-hidden select-none"
                        style={{
                          backgroundImage: `radial-gradient(${isTeal ? "#10b98112" : "#3b82f612"} 1.5px, transparent 1.5px)`,
                          backgroundSize: "20px 20px"
                        }}
                      >
                        {/* Interactive Connection path SVG overlays */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                          <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={isTeal ? "#54FFA6" : "#5CB4FF"} />
                            </marker>
                          </defs>

                          {pipelineConnections.map(conn => {
                            const fromNode = pipelineNodes.find(n => n.id === conn.from);
                            const toNode = pipelineNodes.find(n => n.id === conn.to);
                            if (!fromNode || !toNode) return null;

                            // Absolute coordinates of INGEST and target
                            const x1 = fromNode.x + 160;
                            const y1 = fromNode.y + 40;
                            const x2 = toNode.x;
                            const y2 = toNode.y + 40;

                            const midX = x1 + (x2 - x1) / 2;
                            const pathData = `M ${x1} ${y1} Q ${midX} ${y1 + 15} ${midX} ${(y1 + y2) / 2} T ${x2} ${y2}`;

                            const isActive = pipelineRunActive && (
                              fromNode.status === "ACTIVE" || 
                              (fromNode.status === "COMPLETED" && toNode.status === "ACTIVE")
                            );

                            return (
                              <g key={conn.id} className="pointer-events-auto">
                                {/* Invisible wide backing to make clicking/hovering easy */}
                                <path 
                                  d={pathData} 
                                  fill="none" 
                                  stroke="transparent" 
                                  strokeWidth="10"
                                  className="cursor-pointer"
                                  onClick={() => {
                                    playSfx("click");
                                    setPipelineConnections(prev => prev.filter(c => c.id !== conn.id));
                                    setTerminalLogs(prev => [...prev, `[PIPELINE_ENGINE] Manually disconnected runstream from ${fromNode.label} to ${toNode.label}.`]);
                                  }}
                                >
                                  <title>Click to delete this link connection</title>
                                </path>

                                {/* Glowing background neon vector */}
                                <path 
                                  d={pathData} 
                                  fill="none" 
                                  stroke={isActive ? (isTeal ? "#10B981" : "#3B82F6") : "#1e293b"} 
                                  strokeWidth={isActive ? "2.5" : "1.25"}
                                  className={isActive ? "opacity-80 transition-all duration-300 animate-svg-pulse" : "opacity-40 transition-all duration-300"}
                                />

                                {/* Moving telemetry marching ants dash */}
                                <path 
                                  d={pathData} 
                                  fill="none" 
                                  stroke={isActive ? (isTeal ? "#54FFA6" : "#5CB4FF") : "#475569"} 
                                  strokeWidth="1.25"
                                  strokeDasharray={isActive ? "4 3" : "2 4"}
                                  markerEnd="url(#arrow)"
                                  style={{
                                    strokeDashoffset: isActive ? waveOffset * -1.5 : 0
                                  }}
                                />

                                {/* Little tactical anchor control handle */}
                                <foreignObject 
                                  x={midX - 7} 
                                  y={((y1 + y2) / 2) - 7} 
                                  width="14" 
                                  height="14"
                                  className="overflow-visible"
                                >
                                  <button
                                    onClick={() => {
                                      playSfx("click");
                                      setPipelineConnections(prev => prev.filter(c => c.id !== conn.id));
                                      setTerminalLogs(prev => [...prev, `[PIPELINE_ENGINE] Disassembled link mapping: ${fromNode.label} ──► ${toNode.label}.`]);
                                    }}
                                    className="w-3.5 h-3.5 bg-zinc-950/90 border border-zinc-800 hover:border-red-550 text-zinc-550 hover:text-red-400 rounded-none text-[8px] flex items-center justify-center font-bold font-mono leading-none cursor-pointer p-0"
                                    title="Sever link connection"
                                  >
                                    ×
                                  </button>
                                </foreignObject>
                              </g>
                            );
                          })}
                        </svg>

                        {/* Node absolute elements */}
                        {pipelineNodes.map((node) => {
                          const isCurrentlySelectedSource = selectedOutputNodeId === node.id;
                          const hasTargetOutputs = pipelineConnections.some(c => c.from === node.id);
                          
                          // Style based on status variable
                          let borderClass = 'border-zinc-800';
                          let bgHeaderClass = 'bg-[#0E0F12]';
                          let badgeColor = 'text-zinc-550 border-zinc-850 bg-zinc-950';
                          let textAccent = 'text-zinc-400';
                          
                          if (node.status === "COMPLETED") {
                            borderClass = isTeal ? "border-[#10B981]/40" : "border-[#3B82F6]/40";
                            bgHeaderClass = isTeal ? "bg-[#10B981]/15" : "bg-[#3B82F6]/15";
                            badgeColor = isTeal ? "text-[#54FFA6] border-[#10B981]/40 bg-[#10B981]/10" : "text-[#5CB4FF] border-[#3B82F6]/40 bg-[#3B82F6]/10";
                            textAccent = isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]";
                          } else if (node.status === "ACTIVE") {
                            borderClass = "border-amber-500 animate-pulse";
                            bgHeaderClass = "bg-amber-500/20";
                            badgeColor = "text-amber-400 border-amber-500/50 bg-amber-500/15 animate-pulse";
                            textAccent = "text-amber-400";
                          } else if (node.status === "ERROR") {
                            borderClass = "border-red-500";
                            bgHeaderClass = "bg-red-950/30";
                            badgeColor = "text-red-400 border-red-500/40 bg-red-950/20";
                            textAccent = "text-red-450";
                          }

                          return (
                            <div 
                              key={node.id}
                              id={`node-elm-${node.id}`}
                              className={`absolute w-[160px] bg-black border-2 ${borderClass} rounded-none shadow-lg z-10`}
                              style={{
                                left: `${node.x}px`,
                                top: `${node.y}px`
                              }}
                            >
                              {/* Header (Drag area handle) */}
                              <div 
                                onMouseDown={(e) => {
                                  const rect = e.currentTarget.closest('[id^="node-elm-"]')?.getBoundingClientRect();
                                  if (rect) {
                                    setDraggingNodeId(node.id);
                                    setDragOffset({
                                      x: e.clientX - rect.left,
                                      y: e.clientY - rect.top
                                    });
                                  }
                                }}
                                className={`px-2 py-1 border-b border-zinc-900 flex justify-between items-center cursor-move select-none ${bgHeaderClass}`}
                                title="Hold and drag to reposition block"
                              >
                                <span className="text-[8.5px] font-bold text-white font-mono truncate max-w-[100px]" title={node.label}>
                                  {node.label}
                                </span>
                                
                                <button 
                                  onClick={() => {
                                    playSfx("click");
                                    setPipelineNodes(prev => prev.filter(n => n.id !== node.id));
                                    setPipelineConnections(prev => prev.filter(c => c.from !== node.id && c.to !== node.id));
                                    setTerminalLogs(prev => [...prev, `[PIPELINE_ENGINE] Decommissioned and dissolved task node: ${node.label}.`]);
                                  }}
                                  className="act-btn text-zinc-550 hover:text-red-400 text-[10px] bg-transparent border-0 font-bold p-0 cursor-pointer"
                                  title="Decommission/Delete this task node"
                                >
                                  ×
                                </button>
                              </div>

                              {/* Node Body */}
                              <div className="p-2 space-y-1.5 text-[9px] font-mono relative bg-[#060708]">
                                <div className="flex justify-between text-zinc-550 select-none">
                                  <span>AGENT AUTH:</span>
                                  <span className="text-zinc-350 font-bold max-w-[80px] break-all truncate">{node.agent}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                  <span className="text-zinc-550 select-none">STATUS_REPLY:</span>
                                  <span 
                                    onClick={() => {
                                      playSfx("click");
                                      const states: Array<typeof node.status> = ["IDLE", "ACTIVE", "COMPLETED", "ERROR"];
                                      const nextIdx = (states.indexOf(node.status) + 1) % states.length;
                                      setPipelineNodes(prev => prev.map(n => 
                                        n.id === node.id ? { ...n, status: states[nextIdx] } : n
                                      ));
                                    }}
                                    className={`px-1 py-0.5 border text-[7.5px] font-mono leading-none tracking-tight font-bold cursor-pointer select-none ${badgeColor}`}
                                    title="Click to cycle task states"
                                  >
                                    {node.status}
                                  </span>
                                </div>

                                {/* Link Connection port handles */}
                                <div className="flex items-center justify-between pt-1 border-t border-zinc-950 mt-1 pb-0.5">
                                  {/* Input Port (Target connection) */}
                                  <button
                                    onClick={() => {
                                      if (selectedOutputNodeId) {
                                        if (selectedOutputNodeId === node.id) {
                                          playSfx("warning");
                                          return;
                                        }
                                        // Connect
                                        const exists = pipelineConnections.some(c => c.from === selectedOutputNodeId && c.to === node.id);
                                        if (!exists) {
                                          setPipelineConnections(prev => [...prev, {
                                            id: `conn-${Date.now()}`,
                                            from: selectedOutputNodeId,
                                            to: node.id
                                          }]);
                                          const fromN = pipelineNodes.find(n => n.id === selectedOutputNodeId);
                                          setTerminalLogs(prev => [
                                            ...prev, 
                                            `[PIPELINE_ENGINE] Complete connection path binding: [${fromN?.label}] ──► [${node.label}]`
                                          ]);
                                          playSfx("success");
                                        } else {
                                          playSfx("warning");
                                        }
                                        setSelectedOutputNodeId(null);
                                      } else {
                                        playSfx("warning");
                                      }
                                    }}
                                    className={`port-btn flex items-center gap-1.5 px-1 py-0.5 border text-[7.5px] font-mono leading-none font-bold rounded-none cursor-pointer bg-transparent border-zinc-900 group ${selectedOutputNodeId && selectedOutputNodeId !== node.id ? "border-amber-500 bg-amber-500/10 text-amber-300 animate-pulse" : "text-zinc-550 hover:text-zinc-300"}`}
                                  >
                                    <span className={`w-1.5 h-1.5 rounded-full ${selectedOutputNodeId && selectedOutputNodeId !== node.id ? "bg-amber-400 animate-pulse" : "bg-zinc-650"} ${node.status === "ACTIVE" ? "bg-amber-500" : ""}`} />
                                    <span>IN</span>
                                  </button>

                                  {/* Output Port (Initiate connection) */}
                                  <button
                                    onClick={() => {
                                      playSfx("click");
                                      if (isCurrentlySelectedSource) {
                                        setSelectedOutputNodeId(null);
                                      } else {
                                        setSelectedOutputNodeId(node.id);
                                      }
                                    }}
                                    className={`port-btn flex items-center gap-1.5 px-1 py-0.5 border text-[7.5px] font-mono leading-none font-bold rounded-none cursor-pointer bg-transparent ${isCurrentlySelectedSource ? "border-[#54FFA6] bg-[#10B981]/15 text-[#54FFA6]" : "border-zinc-900 text-zinc-550 hover:text-zinc-300"}`}
                                  >
                                    <span>OUT</span>
                                    <span className={`w-1.5 h-1.5 rounded-full ${isCurrentlySelectedSource ? "bg-[#54FFA6] animate-ping" : "bg-[#10B981]"} ${hasTargetOutputs ? "bg-emerald-500" : ""}`} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Left/Right Sidebar controls and Link details */}
                    <div className="space-y-4">
                      
                      {/* Workflow Actions */}
                      <div className="border border-zinc-900 p-3 bg-zinc-950/60 space-y-3.5">
                        <div className="text-[9px] font-bold text-zinc-405 uppercase tracking-widest border-b border-zinc-900 pb-1.5">
                          PIPELINE CONTROLLERS
                        </div>

                        <div className="space-y-2 flex flex-col">
                          <button
                            onClick={async () => {
                              if (pipelineRunActive) return;
                              await runPipelineSimulation();
                            }}
                            disabled={pipelineRunActive}
                            className={`w-full py-2 border font-bold text-[9px] uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer ${pipelineRunActive ? "border-zinc-800 text-zinc-650 bg-transparent cursor-not-allowed" : "border-[#10B981] bg-[#10B981]/10 text-[#54FFA6] hover:bg-[#10B981]/15"}`}
                          >
                            <Play size={11} className={pipelineRunActive ? "text-zinc-600" : "text-[#54FFA6] animate-pulse"} />
                            {pipelineRunActive ? "RUNSTREAM EXEC_ACTIVE" : "INIT_PIPELINE_RUN"}
                          </button>

                          <button
                            onClick={() => {
                              playSfx("click");
                              setPipelineNodes(prev => prev.map((n, i) => ({
                                ...n,
                                status: i === 0 ? "COMPLETED" : (i === 1 ? "ACTIVE" : "IDLE")
                              })));
                              setTerminalLogs(prev => [...prev, "[PIPELINE_ENGINE] Workflow node statuses calibrated to base configuration."]);
                            }}
                            className="bg-transparent border border-zinc-800 py-1.5 text-zinc-400 font-bold hover:bg-zinc-900/60 text-[9px] uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5"
                          >
                            <RotateCcw size={10} />
                            RESET_STATUSES
                          </button>

                          <button
                            onClick={() => {
                              playSfx("click");
                              setPipelineConnections([]);
                              setTerminalLogs(prev => [...prev, "[PIPELINE_ENGINE] All active virtual route connectors purged."]);
                            }}
                            className="bg-transparent border border-red-950/80 hover:border-red-650/40 py-1.5 text-zinc-550 hover:text-red-400 font-bold text-[9px] uppercase tracking-wider cursor-pointer text-center"
                          >
                            SEVER ALL CONNS
                          </button>

                          <button
                            onClick={handleAutoArrange}
                            className={`bg-transparent border ${isTeal ? "border-[#10B981]/50 text-[#54FFA6] hover:bg-[#10B981]/10" : "border-[#3B82F6]/50 text-[#5CB4FF] hover:bg-[#3B82F6]/10"} py-1.5 font-bold text-[9px] uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5`}
                            title="Automatically organize nodes using force-directed graph alignment"
                          >
                            <Network size={11} className={isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"} />
                            AUTO_ARRANGE_NODES
                          </button>

                          <button
                            onClick={() => {
                              playSfx("success");
                              setPipelineNodes([
                                { id: "node-1", label: "INGEST_TELEMETRY", agent: "RESEARCH_AGENT", status: "COMPLETED", x: 40, y: 70 },
                                { id: "node-2", label: "REASON_VALIDATE", agent: "ROUTER_AGENT", status: "ACTIVE", x: 260, y: 160 },
                                { id: "node-3", label: "SYNTHESIZE_CODE", agent: "CODING_AGENT", status: "IDLE", x: 470, y: 30 },
                                { id: "node-4", label: "DEPLOY_SANDBOX", agent: "SUPPORT_AGENT", status: "IDLE", x: 470, y: 220 }
                              ]);
                              setPipelineConnections([
                                { id: "conn-1", from: "node-1", to: "node-2" },
                                { id: "conn-2", from: "node-2", to: "node-3" },
                                { id: "conn-3", from: "node-2", to: "node-4" }
                              ]);
                              setTerminalLogs(prev => [...prev, "[PIPELINE_ENGINE] Factory workflow constellation restored."]);
                            }}
                            className="bg-transparent border border-zinc-900 py-1 text-zinc-505 hover:text-zinc-400 font-normal text-[8px] uppercase tracking-wider cursor-pointer text-center"
                          >
                            [ FACTORY DEFAULTS ]
                          </button>
                        </div>
                      </div>

                      {/* Add Node Panel */}
                      <div className="border border-zinc-900 p-3 bg-zinc-950/60 space-y-3">
                        <div className="text-[9px] font-bold text-zinc-405 uppercase tracking-widest border-b border-zinc-900 pb-1.5 flex justify-between items-center">
                          <span>Spawn Task Block</span>
                          <Sparkles size={11} className="text-[#10B910]" />
                        </div>

                        <div className="space-y-2.5 font-mono text-[9.5px]">
                          <div className="space-y-1">
                            <span className="text-zinc-550 h-5 flex items-center uppercase">Task Block Header Name:</span>
                            <input 
                              type="text" 
                              value={newNodeLabel}
                              onChange={(e) => setNewNodeLabel(e.target.value)}
                              placeholder="e.g. DATA_PARSING"
                              className="w-full bg-black border border-zinc-800 px-2 py-1 text-zinc-200 text-[10px] focus:outline-none focus:border-[#10B981] placeholder-zinc-700 uppercase"
                            />
                          </div>

                          <div className="space-y-1">
                            <span className="text-zinc-550 h-5 flex items-center uppercase">Authorized Agent:</span>
                            <select 
                              value={newNodeAgent}
                              onChange={(e) => setNewNodeAgent(e.target.value)}
                              className="w-full bg-black border border-zinc-800 px-2 py-1 text-zinc-300 text-[10px] focus:outline-none focus:border-[#10B981]"
                            >
                              {agents.map(ag => (
                                <option key={ag.id} value={ag.name}>{ag.name}</option>
                              ))}
                            </select>
                          </div>

                          <button
                            onClick={() => {
                              handleAddNode();
                            }}
                            className="w-full py-1.5 bg-[#10B981]/10 border border-[#10B981]/55 hover:bg-[#10B981]/15 text-[#54FFA6] font-bold text-[9px] uppercase tracking-wider cursor-pointer mt-1"
                          >
                            [+] INJECT NEW TASK BLOCK
                          </button>
                        </div>
                      </div>

                      {/* Visual active connections list */}
                      <div className="border border-zinc-900 p-3 bg-[#06070a] space-y-2 select-none">
                        <div className="text-[8.5px] font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1">
                          VIRTUAL CIRCUIT BUS MAPPINGS
                        </div>
                        <div className="space-y-1.5 max-h-[110px] overflow-y-auto">
                          {pipelineConnections.length === 0 ? (
                            <div className="text-[8.5px] text-zinc-650 italic py-1 text-center font-sans">
                              No active virtual paths maps. Draw connections using ports.
                            </div>
                          ) : (
                            pipelineConnections.map(conn => {
                              const fromNode = pipelineNodes.find(n => n.id === conn.from);
                              const toNode = pipelineNodes.find(n => n.id === conn.to);
                              return (
                                <div key={conn.id} className="flex justify-between items-center text-[9px] font-mono bg-black/60 p-1 border border-zinc-950">
                                  <span className="text-zinc-400 font-bold max-w-[70px] truncate" title={fromNode?.label || conn.from}>
                                    {fromNode?.label || conn.from}
                                  </span>
                                  <span className="text-[#10B981] font-bold">──►</span>
                                  <span className="text-zinc-400 font-bold max-w-[70px] truncate" title={toNode?.label || conn.to}>
                                    {toNode?.label || conn.to}
                                  </span>
                                  <button
                                    onClick={() => {
                                      playSfx("click");
                                      setPipelineConnections(prev => prev.filter(c => c.id !== conn.id));
                                    }}
                                    className="text-zinc-500 hover:text-red-400 p-0 hover:bg-zinc-900 leading-none cursor-pointer text-[10px] border-0"
                                  >
                                    ×
                                  </button>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* Action buttons footer for Center Workspace */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-col sm:flex-row gap-2.5 justify-between items-center select-none">
                <span className="text-zinc-550 text-[9px] font-mono">OPERATIONAL_BUILDSTAMP: b4fc_8a92_e77z_6b2d</span>
                <div className="flex gap-2">
                  <button 
                    id="sys-rescan-btn"
                    onClick={() => {
                      playSfx("success");
                      setTerminalLogs(prev => [...prev, "[ACTION] Complete telemetry node diagnostics rescan initiated manually."]);
                    }}
                    className="px-3.5 py-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 font-bold text-[9px] uppercase tracking-wider cursor-pointer"
                  >
                    DIAGNOSTIC RE-SCAN
                  </button>
                  <button 
                    id="sys-prod-deploy-btn"
                    onClick={() => {
                      playSfx("success");
                      setTerminalLogs(prev => [
                        ...prev, 
                        "[DEPLOY] Direct pipe sequence linked: 100% telemetry streams piped to production Meridian runtime stack. Meridian alpha operational nodes synchronized."
                      ]);
                    }}
                    className={`px-4 py-1 bg-zinc-900 border ${themeColors.borderAccent} ${themeColors.textBright} font-bold text-[9px] uppercase tracking-wider hover:bg-zinc-850 cursor-pointer`}
                  >
                    PIPE TO RUNTIME STACK
                  </button>
                </div>
              </div>

            </div>

          </div>

        </main>

        {/* ==================== RIGHT COLLAPSED INSPECTOR STRIP ==================== */}
        {rightDrawerCollapsed && (
          <div 
            id="right-strip-bar"
            className={`w-[44px] flex-none ${themeColors.bgPane} border-l-2 ${themeColors.borderMain} flex flex-col items-center py-3 select-none z-20 transition-all duration-350`}
          >
            <button 
              id="expand-right-btn"
              onClick={() => { playSfx("transition"); setRightDrawerCollapsed(false); }}
              className="p-1 mb-4 hover:bg-zinc-800/60 border border-zinc-900 group"
              title="Expand Active Node Inspector Pane"
            >
              <ChevronLeft size={14} className="text-zinc-400 group-hover:text-white" />
            </button>

            <div className="h-px w-6 bg-zinc-800 mb-4" />

            <div className="flex flex-col gap-4 text-zinc-500">
              <button onClick={() => { playSfx("transition"); setRightDrawerCollapsed(false); }} className="text-zinc-500 hover:text-white cursor-pointer bg-transparent border-0 p-0 outline-none" title="Active Params">
                <Sliders size={14} />
              </button>
              <button onClick={() => { playSfx("transition"); setRightDrawerCollapsed(false); }} className="text-zinc-500 hover:text-white cursor-pointer bg-transparent border-0 p-0 outline-none" title="State Hash">
                <Database size={14} />
              </button>
              <button onClick={() => { playSfx("transition"); setRightDrawerCollapsed(false); }} className="text-[#F59E0B] hover:text-white cursor-pointer animate-pulse bg-transparent border-0 p-0 outline-none" title="Active Warning">
                <AlertTriangle size={14} />
              </button>
            </div>
            
            <div className="mt-auto flex flex-col gap-1 items-center">
              <span className="text-[7.5px] scale-90 font-bold font-mono text-zinc-600 block origin-center -rotate-90 whitespace-nowrap mb-4">INSPECT_NODE</span>
              <Gauge size={13} className="text-zinc-600" />
            </div>
          </div>
        )}

        {/* ==================== RIGHT PANEL: FULL EXPANDED INSPECTOR ==================== */}
        {!rightDrawerCollapsed && (
          <aside 
            id="right-sidebar-full"
            className="w-[290px] flex-none bg-[#090B0A] border-l-2 border-zinc-900 flex flex-col justify-between overflow-y-auto select-none z-20 transition-all duration-350"
          >
            <div className="flex flex-col">
              
              {/* Header with collapse options */}
              <div className="p-3 bg-zinc-950/90 border-b border-zinc-900 text-[9px] text-[#FFFFFF] font-bold uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <SlidersHorizontal size={11} className={isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"} />
                  ACTIVE NODE TELE_INSPECTOR
                </span>
                <button 
                  id="collapse-right-btn"
                  onClick={() => { playSfx("transition"); setRightDrawerCollapsed(true); }}
                  className="p-0.5 hover:bg-zinc-800 text-zinc-500 hover:text-[#FFFFFF] border border-zinc-800"
                  title="Collapse Right Inspector Drawer"
                >
                  <ChevronRight size={12} />
                </button>
              </div>

              {/* Data parameters & settings details */}
              <div className="p-4 space-y-5">
                
                {/* Section A: Agent Focus Node metadata */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase font-sans">Active Target Metadata</span>
                    <div className="h-px bg-zinc-900 flex-1" />
                  </div>

                  <div className="grid grid-cols-[85px_1fr] gap-y-1.5 text-[10px] font-mono leading-relaxed bg-black/60 border border-zinc-900 p-3">
                    <span className="text-zinc-500">CALLNAME:</span> <span className="text-white font-bold">{selectedAgent.name}</span>
                    <span className="text-zinc-500">SYS_ID:</span> <span className="text-zinc-300 font-mono">{selectedAgent.id}</span>
                    <span className="text-zinc-500">ENGINE_TYPE:</span> <span className="text-zinc-400">{selectedAgent.type}</span>
                    <span className="text-zinc-500">PROVIDER:</span> <span className={`font-semibold ${isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"}`}>{selectedAgent.provider}</span>
                    <span className="text-zinc-500">MODEL_ALIAS:</span> <span className="text-zinc-200">{selectedAgent.model}</span>
                  </div>
                </div>

                {/* Section B: Dynamic metrics evaluation indicators */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase font-sans">Node Core Diagnostics</span>
                    <div className="h-px bg-zinc-900 flex-1" />
                  </div>

                  <div className="space-y-3 text-[10.5px]">
                    <div>
                      <div className="flex justify-between text-zinc-500 py-0.5 font-mono">
                        <span>L2 Euclidean Drift:</span>
                        <span className={`${themeColors.textBright} font-mono font-bold`}>0.004 deg (SECURE)</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-950 border border-zinc-900">
                        <div className={`h-full ${isTeal ? "bg-[#10B981]" : "bg-[#3B82F6]"} w-[12%]`} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-zinc-500 py-0.5 font-mono">
                        <span>Confidence Score (Q-Max):</span>
                        <span className="text-zinc-300 font-mono font-bold">0.982 (STABLE)</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-950 border border-zinc-900">
                        <div className={`h-full ${isTeal ? "bg-[#10B981]" : "bg-[#3B82F6]"} w-[98%]`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section C: Live Parameter tuning */}
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase font-sans">Execution Parameter Offsets</span>
                    <div className="h-px bg-zinc-900 flex-1" />
                  </div>

                  <div className="space-y-3.5 text-[10px] font-mono bg-black/60 border border-zinc-900 p-3">
                    <div>
                      <div className="flex justify-between text-zinc-450 mb-1">
                        <span>TEMPERATURE</span>
                        <span className="text-white font-bold">{tempParam}</span>
                      </div>
                      <input 
                        type="range" 
                        min={0} 
                        max={2} 
                        step={0.05} 
                        value={tempParam}
                        onChange={(e) => { playSfx("click"); setTempParam(Number(e.target.value)); }}
                        className="w-full h-1 bg-zinc-900 border border-zinc-800 rounded-none appearance-none cursor-pointer accent-[#DEEBE4]" 
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-zinc-450 mb-1">
                        <span>TOP_P_NUCLEUS</span>
                        <span className="text-white font-bold">{topPParam}</span>
                      </div>
                      <input 
                        type="range" 
                        min={0} 
                        max={1} 
                        step={0.01} 
                        value={topPParam}
                        onChange={(e) => { playSfx("click"); setTopPParam(Number(e.target.value)); }}
                        className="w-full h-1 bg-zinc-900 border border-zinc-800 rounded-none appearance-none cursor-pointer accent-[#DEEBE4]" 
                      />
                    </div>
                  </div>
                </div>

                {/* Section D: Raw state alignments JSON view */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase">Active Context Alignments Map</span>
                    <div className="h-px bg-zinc-900 flex-1" />
                  </div>
                  <div className="bg-black border border-zinc-900 p-2.5 font-mono text-[8px] text-zinc-600 h-28 overflow-auto leading-normal select-all">
                    {"{"} <br />
                    &nbsp;&nbsp;&quot;operational_id&quot;: &quot;{activeOperationId}&quot;,<br />
                    &nbsp;&nbsp;&quot;theme_active&quot;: &quot;{systemTheme}&quot;,<br />
                    &nbsp;&nbsp;&quot;perspective&quot;: &quot;{selectedPerspective}&quot;,<br />
                    &nbsp;&nbsp;&quot;temperature_offset&quot;: {tempParam},<br />
                    &nbsp;&nbsp;&quot;top_p_offset&quot;: {topPParam},<br />
                    &nbsp;&nbsp;&quot;auth_handshake_tok&quot;: &quot;x-meridian-terminal-3&quot;,<br />
                    &nbsp;&nbsp;&quot;grid_active_threads&quot;: [0.95, 0.70, 0.40, 0.00],<br />
                    &nbsp;&nbsp;&quot;failover_clusters&quot;: [&quot;tailscale_vpc&quot;, &quot;google_backup_pro&quot;]<br />
                    {"}"}
                  </div>
                </div>

              </div>
            </div>

            {/* Quick incident alert at bottom of right panel */}
            <div className="p-3 border-t border-zinc-900 bg-zinc-950/80 font-mono text-[9px] text-zinc-500 mt-auto select-none">
              <div className="flex items-start gap-2 text-[#F59E0B]/90 leading-normal">
                <AlertTriangle size={13} className="shrink-0 mt-0.5 text-orange-500 animate-pulse" />
                <div>
                  <span className="font-bold underline text-zinc-100">WARNING_SYS_RESOLVED:</span> High latency on third-party loops has been resolved by Google failover redundancy.
                </div>
              </div>
            </div>

          </aside>
        )}

      </div>

      {/* -------------------- FOOTER STATUS STRIP -------------------- */}
      <footer id="meridian-footer" className={`h-8 border-t-2 ${themeColors.borderMain} bg-[#090C0B] flex items-center px-4 justify-between text-[9px] text-zinc-500 font-mono z-30 select-none`}>
        <div className="flex gap-4">
          <span className="text-zinc-600">PRIMARY_OPERATOR:</span>
          <span className="text-zinc-300">kghudson88001@gmail.com</span>
          <span className="hidden sm:inline text-zinc-750">|</span>
          <span className="hidden sm:inline">MONITORING_C2_STATE: CONNECTED</span>
          <span className="hidden sm:inline text-zinc-750">|</span>
          <span className="hidden sm:inline text-[#54FFA6] flex items-center gap-1 font-bold bg-[#10B981]/10 px-1.5 py-0.5 border border-[#10B981]/25">
            <Lock size={9} /> SSH_ENC: SECURED ({sshSelectedCipher})
          </span>
          <span className="hidden sm:inline text-zinc-750">|</span>
          <span className="hidden sm:inline text-[8.5px]">RESONANCE_INDEX: 0.9997</span>
        </div>
        <div className="flex gap-3">
          <span className="hidden md:inline">C2 ADMIN ENGINE v4.5 // ALL SYSTEMS OPERATIONAL</span>
        </div>
      </footer>

      {/* -------------------- COMMAND PALETTE / SEARCH OVERLAY -------------------- */}
      {searchPaletteOpen && (
        <div 
          id="command-palette-overlay"
          onClick={() => setSearchPaletteOpen(false)}
          className="fixed inset-0 bg-black/85 flex items-start justify-center pt-[15vh] z-[1100] p-4 font-mono select-none"
        >
          <div 
            id="command-palette-card"
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-lg bg-[#040605] border-2 ${isTeal ? "border-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.15)]" : "border-[#3B82F6] shadow-[0_0_25px_rgba(59,130,246,0.15)]"} flex flex-col rounded-none`}
          >
            <div className={`p-2 bg-zinc-950 border-b-2 ${isTeal ? "border-[#142C21]" : "border-[#141C2B]"} flex justify-between items-center text-[10px] text-zinc-400 font-bold`}>
              <span>SYSTEM_INTEGRATED_C2_COMMAND_PALETTE</span>
              <span className="text-zinc-650 bg-black px-1.5 py-0.5 border border-zinc-900 text-[8px]">ESC to Close</span>
            </div>
            
            <div className="p-3 border-b border-zinc-850 bg-zinc-900/15 flex items-center gap-2">
              <span className={`font-bold ${isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"}`}>{">"}</span>
               <input 
                 id="palette-search-input"
                 autoFocus 
                 type="text" 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="flex-1 bg-transparent border-none outline-none text-white text-[11px] placeholder-zinc-650 font-mono"
                 placeholder="Type parameter, perspective or system directive to execute..."
               />
            </div>
            
            <div className="max-h-[220px] overflow-y-auto divide-y divide-[#142C21] bg-black text-left">
              {(() => {
                const allDirectives = [
                  { label: "GOTO_PLANNING", desc: "Activate PLANNING coordinate board perspectives", action: () => changePerspective("PLANNING") },
                  { label: "GOTO_EXECUTION", desc: "Bring up core coroutine EXECUTION terminal command stage", action: () => changePerspective("EXECUTION") },
                  { label: "GOTO_TELEMETRY", desc: "Review real-time micro-latency and Telemetry Heatmaps", action: () => changePerspective("TELEMETRY") },
                  { label: "GOTO_COORDINATION", desc: "Inspect human-in-the-loop approvals and Telegram sync plugin", action: () => changePerspective("COORDINATION") },
                  { label: "GOTO_INTELLIGENCE", desc: "Browse intelligence directories and vectorized VFS schemas", action: () => changePerspective("INTELLIGENCE") },
                  { label: "GOTO_AFTER_ACTION", desc: "Scrub chronological historic replays and events log data", action: () => changePerspective("AFTER_ACTION") },
                  { label: "GOTO_PIPELINE_DESIGNER", desc: "Interact with modular agent directed connection meshes", action: () => changePerspective("PIPELINE_DESIGNER") },
                  { label: "TOGGLE_SFX_SOUND", desc: "Enable or disable custom synthetically-generated feedback oscillators", action: () => setSoundEnabled(!soundEnabled) },
                  { label: "TOGGLE_THEME_COLOR", desc: "Swap between GreenHouse Teal and Cobalt Genome registries", action: () => { setSystemTheme(isTeal ? "COBALT_GENOME" : "TEAL_TACTICAL"); } },
                  { label: "TOGGLE_ANALOG_DISPLAY", desc: "Show or hide the RGB pulsing state signifier clock", action: () => setShowAnalogClock(!showAnalogClock) },
                  { label: "TOGGLE_SECONDS_HAND", desc: "Show or hide the ticking second hand on the analog display", action: () => setShowSecondHand(!showSecondHand) },
                  { label: "TOGGLE_NETWORK_ONLINE", desc: "Toggle the online/offline system diagnostic clock state signifier", action: () => setIsOnline(!isOnline) },
                  { label: "TELEGRAM_PLUGIN_CONFIG", desc: "Focus and config the client-bot integration parameters", action: () => { changePerspective("COORDINATION"); } },
                ];
                
                const filtered = allDirectives.filter(d => 
                  d.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  d.desc.toLowerCase().includes(searchQuery.toLowerCase())
                );
                
                if (filtered.length === 0) {
                  return (
                    <div className="p-4 text-center text-zinc-600 font-mono text-[9px] uppercase">
                      No matching command vector directives located.
                    </div>
                  );
                }
                
                return filtered.map((dir) => (
                  <div 
                    key={dir.label}
                    onClick={() => {
                      dir.action();
                      setSearchPaletteOpen(false);
                      setSearchQuery("");
                      playSfx("success");
                    }}
                    className="p-2.5 cursor-pointer text-left hover:bg-zinc-900 flex justify-between items-center group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-zinc-350 group-hover:text-white text-[10px] uppercase tracking-wider">{dir.label}</div>
                      <div className="text-zinc-600 text-[8.5px] mt-0.5 leading-snug">{dir.desc}</div>
                    </div>
                    <span className="text-[8px] border border-zinc-850 px-1 bg-black/40 text-[#10B981] font-mono select-none opacity-0 group-hover:opacity-100 transition-opacity">EXEC</span>
                  </div>
                ));
              })()}
            </div>
            
            <div className="p-2 bg-zinc-950/90 text-zinc-700 text-[8px] border-t border-zinc-900 flex justify-between items-center select-none font-mono">
              <span>ACTIVE COMMAND REGISTRIES: 13 SPECIFIED</span>
              <span>MERIDIAN COMMAND PALETTE v4.5</span>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- ABOUT SYSTEM MODAL -------------------- */}
      {aboutModalOpen && (
        <AboutModal 
          isOpen={aboutModalOpen} 
          onClose={() => { setAboutModalOpen(false); playSfx("transition"); }} 
          isTeal={isTeal} 
          themeColors={themeColors} 
          printSpeed={printSpeed}
          setPrintSpeed={setPrintSpeed}
          soundEnabled={soundEnabled}
          audioContextRef={audioContextRef}
        />
      )}

    </div>
  );
}

// ==================== MERIDIAN GENERAL REGISTERED DIRECTIVES PHILOSOPHY ====================
const MERIDIAN_PHILOSOPHY = `--- MERIDIAN SYSTEM ARCHITECT BLUEPRINT ---

CORE ARCHITECTURAL PARADIGM: THE COMMON OPERATING PICTURE
Traditional feature-specific views and navigation trees are dismissed. Every element in Meridian serves as a modular spatial perspective of an active Operational Mission (Planning, Execution, Telemetry, Coordination, Intelligence, After-Action) mapped topological-radially rather than isolated components.

DEFENSE-GRADE BRUTALIST GEOMETRY
- 100% strict 90-degree angular alignments are structural law (border-radius: 0).
- High mechanical panel densities provide immediate, dense spatial coordinates.
- Thick, physical structural partition interfaces (2px borders) denote physical terminal separation walls.

NO-SLOP INFORMATION DESIGN
- All decorative aesthetics, padded cushions, rounded tabs, and gradients are removed.
- High data-carrying density and mono-spaced fonts are prioritized at outer display margins.
- Color registries serve strictly telemetry-functional classifications:
  * Fern Green outputs active/stable operations.
  * Amber Warnings flag incident diagnostics.
  * Cobalt Blue highlights data nodes & structural relational hashes.

TACTICAL FEEDBACK SYSTEM
Procedural, oscillator-synthesized sound patterns align feed-back directly with user actions.

------------------ OPERATOR VERIFICATION SECURE // C2_SYSTEMS_LOCKED ------------------`;

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  isTeal: boolean;
  themeColors: any;
  printSpeed: number;
  setPrintSpeed: (s: number) => void;
  soundEnabled: boolean;
  audioContextRef: React.MutableRefObject<AudioContext | null>;
}

function AboutModal({ 
  isOpen, 
  onClose, 
  isTeal, 
  themeColors, 
  printSpeed, 
  setPrintSpeed, 
  soundEnabled, 
  audioContextRef 
}: AboutModalProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [typingActive, setTypingActive] = useState(true);
  
  // Custom typewriter implementation
  useEffect(() => {
    let currentIdx = 0;
    let accumulated = "";
    
    const initTimeout = setTimeout(() => {
      setDisplayedText("");
      setTypingActive(true);
    }, 0);

    const playLetterSfx = () => {
      if (!soundEnabled) return;
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        const ctx = audioContextRef.current;
        if (ctx.state === "suspended") ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(1400 + Math.random() * 300, ctx.currentTime);
        gain.gain.setValueAtTime(0.002, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.015);
        osc.start();
        osc.stop(ctx.currentTime + 0.015);
      } catch (e) {}
    };

    const interval = setInterval(() => {
      if (currentIdx < MERIDIAN_PHILOSOPHY.length) {
        const char = MERIDIAN_PHILOSOPHY[currentIdx];
        accumulated += char;
        setDisplayedText(accumulated);
        currentIdx++;
        
        // Play typing telemetry ticker
        if (char !== " " && char !== "\n" && currentIdx % 2 === 0) {
          playLetterSfx();
        }
      } else {
        clearInterval(interval);
        setTypingActive(false);
      }
    }, printSpeed);

    return () => {
      clearTimeout(initTimeout);
      clearInterval(interval);
    };
  }, [printSpeed, soundEnabled, audioContextRef]);

  // Handle ESC or backdrop bindings
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSkip = () => {
    setDisplayedText(MERIDIAN_PHILOSOPHY);
    setTypingActive(false);
  };

  const handleReset = () => {
    setDisplayedText("");
    // Re-engage typing animation by changing active speed slightly or re-instantiating state trigger
    const prevSpeed = printSpeed;
    setPrintSpeed(0); // Trigger re-run
    setTimeout(() => {
      setPrintSpeed(prevSpeed);
    }, 20);
  };

  return (
    <div 
      id="about-modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-black/85 flex items-center justify-center z-[1000] p-4 font-mono select-none"
    >
      <div 
        id="about-modal-card"
        className={`w-full max-w-2xl bg-[#030403] border-2 ${isTeal ? "border-[#10B981]" : "border-[#3B82F6] shadow-[0_0_30px_rgba(59,130,246,0.15)]"} flex flex-col rounded-none`}
      >
        {/* Header bar */}
        <div className={`p-2.5 bg-zinc-950/95 border-b-2 ${isTeal ? "border-[#142C21]" : "border-[#141C2B]"} flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <Cpu size={12} className={isTeal ? "text-[#54FFA6]" : "text-[#5CB4FF]"} />
            <span className="font-bold uppercase tracking-widest text-[#FFFFFF] text-[10px]">C2_OPERATOR_PHILOSOPHY_MANUAL</span>
          </div>
          <button 
            id="close-about-btn"
            onClick={onClose}
            className="px-2 py-0.5 bg-red-950/40 border border-red-800 hover:border-red-500 text-red-400 hover:text-red-300 font-mono text-[9px] uppercase cursor-pointer transition-colors"
          >
            DISMISS [ESC]
          </button>
        </div>

        {/* Speed panel options & print indicators */}
        <div className="p-3 bg-zinc-900/40 border-b border-zinc-950 flex flex-wrap gap-4 items-center justify-between text-[10px]">
          <div className="flex items-center gap-3">
            <span className="text-zinc-500 font-bold uppercase tracking-wider">PRINT_RATE:</span>
            <div className="flex items-center gap-1.5 bg-black/60 p-0.5 border border-zinc-850">
              <button 
                id="speed-slow-btn"
                onClick={() => setPrintSpeed(30)}
                className={`px-2 py-0.5 text-[9px] font-bold uppercase cursor-pointer ${printSpeed === 30 ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                SLOW (30ms)
              </button>
              <button 
                id="speed-normal-btn"
                onClick={() => setPrintSpeed(12)}
                className={`px-2 py-0.5 text-[9px] font-bold uppercase cursor-pointer ${printSpeed === 12 || printSpeed === 11 ? "bg-[#10B981]/25 text-[#54FFA6]" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                NORMAL (12ms)
              </button>
              <button 
                id="speed-hyper-btn"
                onClick={() => setPrintSpeed(4)}
                className={`px-2 py-0.5 text-[9px] font-bold uppercase cursor-pointer ${printSpeed === 4 ? "bg-amber-500/20 text-amber-500 animate-pulse" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                HYPER (4ms)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {typingActive ? (
              <button 
                id="skip-typing-btn"
                onClick={handleSkip}
                className="px-2.5 py-1 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600 uppercase text-[9px] cursor-pointer"
              >
                SKIP_TYPING
              </button>
            ) : (
              <button 
                id="replay-typing-btn"
                onClick={handleReset}
                className="px-2.5 py-1 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600 uppercase text-[9px] cursor-pointer flex items-center gap-1"
              >
                <RotateCcw size={10} />
                <span>REPLAY_ANIM</span>
              </button>
            )}
          </div>
        </div>

        {/* Console Viewbox containing the printing paragraph */}
        <div className="p-4 bg-black h-[350px] overflow-y-auto border-b border-zinc-950 select-text scrollbar-thin scrollbar-thumb-zinc-900">
          <pre className="whitespace-pre-wrap font-mono text-[10.5px] leading-relaxed text-zinc-300 select-text font-medium antialiased">
            {displayedText}
            {typingActive && (
              <span className="bg-[#10B981] h-3.5 w-1.5 inline-block ml-0.5 animate-pulse align-middle" />
            )}
          </pre>
        </div>

        {/* Modal Status Indicator Strip */}
        <div className="p-3 bg-zinc-950/95 flex justify-between items-center text-[9px] text-zinc-500">
          <div className="flex gap-4">
            <span>CHAR_COUNT: {displayedText.length} / {MERIDIAN_PHILOSOPHY.length}</span>
            <span>CYCLES: {typingActive ? "SYS_PRINT_BUSY" : "SYS_PRINT_COMPLETE"}</span>
          </div>
          <span className="text-zinc-700 font-bold">STATION: ALPHA_C2_LOCK</span>
        </div>
      </div>
    </div>
  );
}

// ==================== COMPONENT: SSH LOGIN SECURITY INTERFACE GATEWAY ====================
interface SshLoginGateProps {
  onAuthSuccess: (cipher: string) => void;
  isTeal: boolean;
  themeColors: any;
  playSfx: (type: "click" | "warning" | "success" | "transition") => void;
}

function SshLoginGate({ onAuthSuccess, isTeal, themeColors, playSfx }: SshLoginGateProps) {
  const [sshPhase, setSshPhase] = useState<"CONFIG" | "KEYGEN" | "CHALLENGE" | "HANDSHAKE">("CONFIG");
  const [sshCipher, setSshCipher] = useState<string>("ED25519");
  const [sshPassphrase, setSshPassphrase] = useState<string>("MERIDIAN_ROOT_2026");
  const [sshEmail, setSshEmail] = useState<string>("kghudson88001@gmail.com");
  const [sshSymmetric, setSshSymmetric] = useState<string>("CHACHA20_POLY1305");
  const [passphraseError, setPassphraseError] = useState<boolean>(false);
  const [userChallengeInput, setUserChallengeInput] = useState<string>("");
  const [handshakeLogs, setHandshakeLogs] = useState<string[]>([]);

  // Generated cryptographic key values based on selected profile
  const mockKeys: Record<string, { privateKey: string, publicKey: string, fingerprint: string, randomart: string }> = {
    ED25519: {
      privateKey: `-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtz\nc2gtZWQyNTUxOQAAACDHf6jQZpG4eEksk9qDkI589Vv8oM/g5P7LAt7vU1O9iwAA\nAJB51H+fedR/nwAAAAtzc2gtZWQyNTUxOQAAACDHf6jQZpG4eEksk9qDkI589Vv8\noM/g5P7LAt7vU1O9iwAAAECv2VWhfXQ6bXF+N+DlhSgof7Wp4Y9Y4FwFv2N9w6+Z\nM8d/qNBmgbh4SSyT2oOQjnz1W/ygz+Dk/ssC3u9TU72LAAAAF2tnaHVkc29uODgw\nMDFAZ21haWwuY29tAQIDBA==\n-----END OPENSSH PRIVATE KEY-----`,
      publicKey: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMd/qNBmgbh4SSyT2oOQjnz1W/ygz+Dk/ssC3u9TU72L kghudson88001@gmail.com`,
      fingerprint: `SHA256:4tMv9MhWvF8HkxCgTfK76pZ2fT3gP39W5V9sA7bY+Xg`,
      randomart: `+--[ED25519 256]--+\n|  . =+o*o.       |\n|   o .*+= .      |\n|    o.oo.o o     |\n|     ..++ . .    |\n|      o S.       |\n|       +.+.      |\n|      .o*oo      |\n|       E+ .      |\n|       .o*       |\n+----[SHA256]-----+`
    },
    RSA_4096: {
      privateKey: `-----BEGIN RSA PRIVATE KEY-----\nMIIJKQIBAAKCAgEA0Tux+fM+i49Z5i/6B8/9QJ5mNzVxXF7fK8zN1XyN3T9l+oW5o\nC8+3mN1fLx7+mE4bI6Vp/X9fE4w6B8zN9XzN9T9mNzVxXF7fK8zN1XyN3T9l+oW5o\n... (4096-bit Secure RSA Encrypted Payload) ...\n-----END RSA PRIVATE KEY-----`,
      publicKey: `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDQO7H58z4Lj1nmL/oHz/1AnmY3NXF ... kghudson88001@gmail.com`,
      fingerprint: `SHA256:8sJf9JhVvF0KlaTjK88pZ3fS2gP50W6U7sB8bX+Za`,
      randomart: `+---[RSA 4096]----+\n|      .o*O*o.    |\n|       .+Xo+     |\n|       o.oo.     |\n|      ..++ .     |\n|     . o S.      |\n|    . .+.+.      |\n|     ..o*o.      |\n|      .E+ .      |\n|      ..o*       |\n+----[SHA256]-----+`
    },
    ECDSA_P384: {
      privateKey: `-----BEGIN EC PRIVATE KEY-----\nMIGkAgEBBDD3vY9bX5F3KdgT9yPqO1k/Z+zD3vY9bX5F3KdgT9yPqO1k/ZpZ... (NIST Curve P-384 Cryptographic block)\n-----END EC PRIVATE KEY-----`,
      publicKey: `ecdsa-sha2-nistp384 AAAAE2VjZHNhLXNoYTItbmlzdHAzODQAAAAIbmlzdHAzODQAA... kghudson88001@gmail.com`,
      fingerprint: `SHA256:1pYv9MhWvF8HkxCgTfK76pZ2fT3gP39W5V9sA7bY+Xg`,
      randomart: `+---[ECDSA 384]---+\n|  . =+o*o.o*+    |\n|   o .*+= .o     |\n|    o.oo.o o     |\n|     ..++ . .    |\n|    o E S.       |\n|   . . +.+.      |\n|    . .o*oo      |\n|     .  E+ .     |\n|      . .o*      |\n+----[SHA256]-----+`
    }
  };

  const keyDetails = mockKeys[sshCipher] || mockKeys.ED25519;

  const handleCreateKeys = () => {
    if (!sshPassphrase || sshPassphrase.length < 6) {
      setPassphraseError(true);
      playSfx("warning");
      return;
    }
    setPassphraseError(false);
    playSfx("success");
    setSshPhase("KEYGEN");
  };

  const handleRequestChallenge = () => {
    playSfx("click");
    setSshPhase("CHALLENGE");
  };

  const handleSubmitChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    if (userChallengeInput === sshPassphrase) {
      setPassphraseError(false);
      playSfx("success");
      setSshPhase("HANDSHAKE");
    } else {
      setPassphraseError(true);
      playSfx("warning");
    }
  };

  const handleBypass = () => {
    playSfx("transition");
    onAuthSuccess("BYPASS_EVAL_KEY");
  };

  const onAuthSuccessRef = useRef(onAuthSuccess);
  const playSfxRef = useRef(playSfx);

  useEffect(() => {
    onAuthSuccessRef.current = onAuthSuccess;
    playSfxRef.current = playSfx;
  });

  useEffect(() => {
    if (sshPhase !== "HANDSHAKE") return;
    let currentLine = 0;
    const lines = [
      `Connecting to meridian.c2.node.local [10.42.0.1] on port 22...`,
      `SSH Connection established. Server Protocol: SSH-2.0-OpenSSH_9.2p1-MeridianSecure`,
      `Negotiating cipher suites...`,
      `Symmetric cipher agreed: ${sshSymmetric === "CHACHA20_POLY1305" ? "chacha20-poly1305@openssh.com" : "aes256-gcm@openssh.com"} for encryption transit.`,
      `Performing Diffie-Hellman Key Exchange (curve25519-sha256)...`,
      `Diffie-Hellman Key Exchange success. Shared secret negotiated.`,
      `Sending operator certificate: ${sshEmail} (${sshCipher})`,
      `Authenticating operator via challenge signature proof...`,
      `Signing challenge block with private key (cipher SHA512-RSA/ED25519)...`,
      `[SUCCESS] Cryptographic signature accepted by secure C2 hypervisor.`,
      `Establishing virtual TTY terminal channel...`,
      `Multiplexing Meridian Secure Console on port 3000...`,
      `[SUCCESS] SSH Session authenticated. Control granted.`
    ];

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setHandshakeLogs(prev => [...prev, lines[currentLine]]);
        currentLine++;
        playSfxRef.current("click");
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onAuthSuccessRef.current(sshCipher);
        }, 500);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [sshPhase, sshSymmetric, sshEmail, sshCipher]);

  return (
    <div className={`fixed inset-0 z-[999] bg-[#020302] flex flex-col justify-center items-center p-4 font-mono select-none overflow-y-auto`}>
      <div className={`w-full max-w-4xl bg-[#040605] border-2 ${isTeal ? "border-[#10B981]" : "border-[#3B82F6] shadow-[0_0_40px_rgba(59,130,246,0.15)]"} flex flex-col rounded-none`}>
        
        {/* Header Bar */}
        <div className={`p-3 bg-zinc-950/95 border-b-2 ${isTeal ? "border-[#142C21]" : "border-[#141C2B]"} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2`}>
          <div className="flex items-center gap-2">
            <Server size={14} className={isTeal ? "text-[#54FFA6] animate-pulse" : "text-[#5CB4FF] animate-pulse"} />
            <span className="font-bold uppercase tracking-widest text-white text-[11px]">MERIDIAN_C2_SECURE_SHELL_AUTHENTICATOR_v4.5</span>
          </div>
          <div className="bg-red-950/40 border border-red-800 px-2.5 py-0.5 text-red-400 font-bold text-[8.5px] uppercase tracking-wider">
            <DefenseIcon size={12} className="text-red-500 mr-1.5 inline-block animate-pulse align-middle" /> DEFENSE_SECURE_ZONE // LEVEL_3_PROOF_REQUIRED
          </div>
        </div>

        {/* Info ticker row */}
        <div className="bg-[#080d0a] border-b border-zinc-900 p-2 text-zinc-500 text-[9px] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-[#DEEBE4] font-bold">STATUS:</span> OPERATOR EXCEEDED BASE PERMISSIONS. RE-ENCRYPT SHIFT ACCESS.
          </div>
          <span className="text-zinc-600 font-bold hidden sm:inline">CIPHER_HANDSHAKE_GATE</span>
        </div>

        {/* Main Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] border-b border-zinc-900">
          
          {/* Left Panel: Configuration Fields */}
          <div className="p-4 bg-zinc-950/60 border-r border-zinc-900 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-zinc-405 uppercase tracking-widest border-b border-zinc-900 pb-1.5 flex items-center gap-1.5">
                <Key size={11} className={isTeal ? "text-[#10B981]" : "text-[#3B82F6]"} />
                <span>SSH Key Configuration</span>
              </div>

              {/* SSH Email Signature */}
              <div className="space-y-1">
                <label className="text-[9.5px] text-zinc-550 uppercase font-bold block">Operator Signature/Email:</label>
                <input 
                  type="text"
                  value={sshEmail}
                  onChange={(e) => setSshEmail(e.target.value)}
                  disabled={sshPhase !== "CONFIG"}
                  className="w-full bg-[#050605] border border-zinc-800 focus:border-[#10B981] disabled:opacity-50 px-2.5 py-1.5 text-zinc-300 text-[10px] focus:outline-none uppercase font-mono"
                  placeholder="e.g. USERNAME@HOST.COM"
                />
              </div>

              {/* Cipher Suite Selector */}
              <div className="space-y-1.5">
                <label className="text-[9.5px] text-zinc-550 uppercase font-bold block">Target Cipher Engine:</label>
                <div className="grid grid-cols-3 gap-1">
                  {["ED25519", "RSA_4096", "ECDSA_P384"].map((cipher) => (
                    <button
                      key={cipher}
                      onClick={() => {
                        setSshCipher(cipher);
                        playSfx("click");
                      }}
                      disabled={sshPhase !== "CONFIG"}
                      className={`py-1 text-[8.5px] font-bold border rounded-none transition-all cursor-pointer ${sshCipher === cipher ? (isTeal ? "bg-[#10B981]/25 text-[#54FFA6] border-[#10B981]/80" : "bg-[#3B82F6]/25 text-[#5CB4FF] border-[#3B82F6]/80") : "border-zinc-850 hover:bg-zinc-900 text-zinc-500 disabled:opacity-50"}`}
                    >
                      {cipher === "ED25519" ? "Ed25519" : cipher === "RSA_4096" ? "RSA-4096" : "ECDSA-384"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Passphrase */}
              <div className="space-y-1">
                <label className="text-[9.5px] text-zinc-550 uppercase font-bold block flex justify-between">
                  <span>Ssh Key Encryption Passphrase:</span>
                  <span className="text-[8px] text-zinc-600">(min 6 chars)</span>
                </label>
                <input 
                  type="password"
                  value={sshPassphrase}
                  onChange={(e) => setSshPassphrase(e.target.value)}
                  disabled={sshPhase !== "CONFIG"}
                  className={`w-full bg-[#050605] border focus:outline-none px-2.5 py-1.5 text-zinc-200 text-[10.5px] font-mono ${passphraseError ? "border-red-500 focus:border-red-500 placeholder-red-950" : isTeal ? "border-zinc-800 focus:border-[#10B981]" : "border-zinc-800 focus:border-[#3B82F6]"}`}
                  placeholder="INPUT PASSPHRASE TO LOCK INTERNAL KEYS"
                />
                {passphraseError && (
                  <p className="text-[8px] text-red-500 font-bold uppercase leading-tight mt-0.5 animate-pulse">
                    Error: Passphrase must be at least 6 characters long.
                  </p>
                )}
              </div>

              {/* Symmetric Cipher Option */}
              <div className="space-y-1">
                <label className="text-[9.5px] text-zinc-550 uppercase font-bold block">Symmetric Transit Cipher:</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {["CHACHA20_POLY1305", "AES_256_GCM"].map((sym) => (
                    <button
                      key={sym}
                      onClick={() => {
                        setSshSymmetric(sym);
                        playSfx("click");
                      }}
                      disabled={sshPhase !== "CONFIG"}
                      className={`py-1 text-[8px] font-bold border cursor-pointer ${sshSymmetric === sym ? (isTeal ? "bg-[#10B981]/15 text-[#54FFA6] border-[#10B981]" : "bg-[#3B82F6]/15 text-[#5CB4FF] border-[#3B82F6]") : "border-zinc-900 text-zinc-500"}`}
                    >
                      {sym === "CHACHA20_POLY1305" ? "CHACHA20-POLY1305" : "AES-256-GCM"}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Config action trigger */}
            <div className="pt-4 border-t border-zinc-900">
              <button
                onClick={handleCreateKeys}
                disabled={sshPhase !== "CONFIG"}
                className={`w-full py-2.5 flex items-center justify-center gap-1.5 text-[9.5px] font-bold uppercase tracking-wider border cursor-pointer transition-all ${sshPhase === "CONFIG" ? (isTeal ? "bg-[#10B981]/10 hover:bg-[#10B981]/25 text-[#54FFA6] border-[#10B981]" : "bg-[#3B82F6]/10 hover:bg-[#3B82F6]/25 text-[#5CB4FF] border-[#3B82F6]") : "border-zinc-900 text-zinc-600 bg-transparent opacity-50 cursor-not-allowed"}`}
              >
                <Fingerprint size={12} className={sshPhase === "CONFIG" ? "animate-pulse text-[#54FFA6]" : ""} />
                <span>GENERATE CRYPTO-KEYS [INIT]</span>
              </button>
            </div>

          </div>

          {/* Right Panel: Interactive Terminal Shell feed */}
          <div className="p-4 bg-black flex flex-col justify-between h-[360px] md:h-[440px]">
            
            {/* Terminal Window content */}
            <div className="flex-1 overflow-y-auto mb-4 font-mono text-[9.5px] text-zinc-350 select-text leading-relaxed scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-black space-y-3">
              
              {sshPhase === "CONFIG" && (
                <div className="space-y-3">
                  <div className="text-[#3298FF] font-bold">meridian_c2_ssh://guest-terminal-active (disconnected)</div>
                  <p className="text-zinc-500 text-[9px] leading-relaxed">
                    This interactive login utilizes a **Secure Cryptographic Handshake (SSH-v2)** before loading physical operational graphics.
                  </p>
                  <p className="text-zinc-500 text-[9px] leading-relaxed">
                    To authenticate, first define your credentials on the left, then click **Generate Crypto-Keys**. Your browser will generate a local secure Ed25519 or high-bit RSA cryptographic key pair, compile local certificates, and require a signature proof against a unique 384-bit challenge envelope.
                  </p>
                  <div className="bg-zinc-950 p-2.5 border border-zinc-900 font-mono text-[8.5px] text-zinc-400 space-y-1">
                    <div className="text-zinc-650 font-bold uppercase tracking-wider text-[8px]">Available Local Cipher Suites:</div>
                    <div>• Cipher Suite ed25519-sha512 (Standard NIST elliptic-curve digital signature)</div>
                    <div>• Cipher Suite rsa-sha2-512 (High modular-integer factoring security)</div>
                    <div>• Peer handshakes support keys signed with custom local passphrases.</div>
                  </div>
                </div>
              )}

              {sshPhase === "KEYGEN" && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-[#070908] px-2.5 py-1.5 border border-zinc-900">
                    <span className="text-[#54FFA6] font-bold text-[9px]">KEYPAIR GENERATED SUCCESSFULLY // FINGERPRINT VALIDATED</span>
                    <span className="text-zinc-600 font-bold block text-[8px]">RFC_4253</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_150px] gap-3">
                    <div className="space-y-2">
                      <div>
                        <div className="text-zinc-550 block font-bold text-[8.5px] uppercase">SHA-256 Key Fingerprint:</div>
                        <div className="text-zinc-150 font-bold font-mono text-[9px] bg-zinc-950 p-1 border border-zinc-900 text-amber-500 select-all">{keyDetails.fingerprint}</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-zinc-550 block font-bold text-[8.5px] uppercase">Private Key Certificate (Passphrase Encrypted):</div>
                        <pre className="text-[8px] bg-zinc-950 text-zinc-400 p-2 max-h-[140px] overflow-y-auto border border-zinc-900 select-all font-mono leading-tight scrollbar-thin">
                          {keyDetails.privateKey}
                        </pre>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-zinc-550 block font-bold text-[8.5px] uppercase text-center mb-1.5">Cipher Randomart:</span>
                      <pre className="text-[8px] text-[#54FFA6] bg-zinc-950 p-2 border border-zinc-900 leading-normal font-mono select-none text-left w-full h-[155px] font-bold">
                        {keyDetails.randomart}
                      </pre>
                    </div>
                  </div>

                  <button
                    onClick={handleRequestChallenge}
                    className={`w-full py-2 bg-[#10B981]/20 hover:bg-[#10B981]/30 border border-[#10B981] text-[#54FFA6] font-bold text-[9.5px] uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5 mt-2`}
                  >
                    <Unlock size={11} className="animate-pulse" />
                    <span>DEPLOY KEYS & REQUEST SECURITY CHALLENGE</span>
                  </button>
                </div>
              )}

              {sshPhase === "CHALLENGE" && (
                <div className="space-y-4">
                  <div className="bg-zinc-950/90 border border-zinc-850 p-3 space-y-2">
                    <div className="flex justify-between items-center text-[9px] font-bold text-[#6EA88D] uppercase">
                      <span>Remote Security Challenge Envelope</span>
                      <span className="text-amber-500 animate-pulse">Awaiting Decrypt-Proof...</span>
                    </div>
                    <p className="text-zinc-400 text-[9px] leading-relaxed">
                      The C2 system has returned a 384-bit secure challenge. You must sign this challenge with your matching encryption passphrase to prove ownership of the private certificate.
                    </p>
                    <div className="text-center py-2.5 border-2 border-dashed border-zinc-800 bg-black text-amber-500 font-bold select-all tracking-wider text-[11px] font-mono leading-none">
                      0x7A9B 4F1C 82D4 E37F 6B2D 10C3 E8A5 F099 C4D2 A193
                    </div>
                  </div>

                  <form onSubmit={handleSubmitChallenge} className="bg-[#050605] border border-zinc-900 p-3 space-y-3">
                    <div className="space-y-1">
                      <span className="text-zinc-450 block font-bold text-[9px] uppercase">
                        Confirm Ssh Passphrase to De-Crypt:
                      </span>
                      <input 
                        type="password"
                        placeholder="INPUT DETECTOR PASSPHRASE TO DECRYPT ENVELOPES"
                        value={userChallengeInput}
                        onChange={(e) => setUserChallengeInput(e.target.value)}
                        className="w-full bg-black border border-zinc-800 focus:border-[#10B981] focus:outline-none text-[10.5px] text-[#54FFA6] px-2.5 py-1.5 font-bold font-mono"
                      />
                      <span className="text-[7.5px] text-zinc-650 block mt-1 uppercase leading-normal">
                        Hint: Passphrase defined on the left config board. (Default is &quot;MERIDIAN_ROOT_2026&quot;)
                      </span>
                      {passphraseError && (
                        <div className="mt-2.5 p-2 bg-red-950/40 border border-red-905/60 text-red-400 font-bold text-[8.5px] uppercase tracking-wider animate-pulse leading-normal">
                          [ERROR] DECRYPTION FAILURE: Challenge verification proof signature mismatch. Verify passphrase.
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        type="submit"
                        className="flex-1 py-2 bg-[#10B981]/15 border border-[#10B981]/60 hover:bg-[#10B981]/25 text-[#54FFA6] font-bold uppercase tracking-wider text-[9px] cursor-pointer"
                      >
                        SUBMIT SECURE SIGNATURE
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          playSfx("click");
                          setSshPhase("KEYGEN");
                        }}
                        className="px-4 py-2 border border-zinc-800 text-zinc-400 hover:bg-zinc-900/60 uppercase tracking-wider text-[9px] cursor-pointer"
                      >
                        BACK_TO_KEYGEN_INFO
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {sshPhase === "HANDSHAKE" && (
                <div className="bg-black text-[9px] text-[#DEEBE4] select-text leading-relaxed font-mono space-y-1 h-full flex flex-col justify-end">
                  <div className="text-[10px] font-bold text-[#54FFA6] mb-2 uppercase tracking-wide flex items-center gap-1.5 border-b border-zinc-900 pb-1 w-full">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                    <span>LOG_INTERACTING_STREAMING_CLIENT_STATUS</span>
                  </div>
                  <div className="space-y-1 overflow-y-auto max-h-[290px]">
                    {handshakeLogs.map((log, idx) => (
                      <div key={idx} className="flex gap-2 text-[9px]">
                        <span className="text-zinc-600 font-bold select-none">[SSH_DAEMON]</span>
                        <span className={log.includes("[SUCCESS]") || log.includes("Tunnel active") ? "text-[#54FFA6] font-bold" : log.includes("Error") ? "text-red-400 font-bold text-[9.5px]" : "text-zinc-300 font-normal"}>
                          {log}
                        </span>
                      </div>
                    ))}
                    <div className="bg-[#10B981] h-3 w-1.5 inline-block animate-pulse align-middle ml-1" />
                  </div>
                </div>
              )}

            </div>

            {/* Config footer button for bypass */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2.5 bg-zinc-950/80 border border-zinc-900 text-[8.5px] text-zinc-500 gap-2 font-mono">
              <span className="leading-tight uppercase font-bold text-zinc-650">
                STATION: {isTeal ? "TELEMETRY_TEAL_NODE_1" : "TELEMETRY_COBALT_NODE_2"}
              </span>
              <button
                type="button"
                onClick={handleBypass}
                className="text-amber-500/80 font-bold hover:text-amber-400 py-0.5 px-2 uppercase hover:bg-amber-500/10 border border-transparent hover:border-amber-500/25 cursor-pointer leading-tight font-mono"
                title="Bypass cryptographical verification for evaluation purposes"
              >
                [ BYPASS PROTOCOL / DIRECT OVERRIDE CONTAINER ]
              </button>
            </div>

          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="p-3 bg-zinc-950/95 flex justify-between items-center text-[8.5px] text-zinc-600">
          <span>PORT_PROTOCOL: SSHv2_CHANNELS [22-RE-BOUND]</span>
          <span>CYCLES: AES_256_GCM_CHACHA_AESHASH</span>
        </div>

      </div>
    </div>
  );
}

