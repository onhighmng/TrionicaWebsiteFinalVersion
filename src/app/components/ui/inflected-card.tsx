"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./inflected-card.css";

export interface InflectedCardProps {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  parentBackgroundColor: string;
  accentColor?: string;
  accentHoverColor?: string;
  cardRounding?: number;
  onClick?: () => void;
}

export const InflectedCard: React.FC<InflectedCardProps> = ({
  id,
  image,
  title,
  subtitle,
  parentBackgroundColor,
  accentColor = "#2354a2",
  accentHoverColor = "#1a3f7a",
  cardRounding = 18,
  onClick,
}) => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div
      className="inflected-card"
      style={
        {
          "--card-rounding": `${cardRounding}px`,
          "--parent-bg": parentBackgroundColor,
        } as React.CSSProperties
      }
    >
      {/* ── Image + inflected corner ─────────────────── */}
      <div className="inflected-cardInner">
        <div className="inflected-box">
          {/* Image */}
          <div
            className="inflected-imgBox"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              style={{
                transition: "transform 0.5s ease",
                transform: imageHovered ? "scale(1.07)" : "scale(1)",
              }}
            />
          </div>

          {/* Inflected corner button */}
          <div className="inflected-icon">
            <button
              className="inflected-iconBox"
              onClick={onClick}
              aria-label={`Ver mais sobre ${title}`}
              style={
                {
                  "--button-bg": accentColor,
                  "--button-hover-bg": accentHoverColor,
                } as React.CSSProperties
              }
            >
              <ArrowUpRight size={26} color="#fff" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Text content ─────────────────────────────── */}
      <div
        className="inflected-content"
        style={
          {
            "--title-color": "#0f172a",
            "--desc-color": "#64748b",
            "--cta-color": accentColor,
          } as React.CSSProperties
        }
      >
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <button className="inflected-cta" onClick={onClick}>
          Ver mais <ArrowUpRight size={13} />
        </button>
      </div>
    </div>
  );
};

export default InflectedCard;
