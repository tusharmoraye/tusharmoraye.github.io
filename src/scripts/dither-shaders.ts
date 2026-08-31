// Shader source for the hero pointer trail. Kept in its own module so the GLSL
// text ships in the lazily loaded chunk alongside three.js, rather than sitting
// in the hero's eager bundle where phones would parse it for nothing.

export const NODES = 24;

export const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  precision highp float;

  #define NODES ${NODES}

  uniform vec2 uPoints[NODES];
  uniform vec3 uAccent;
  uniform float uEnergy;
  uniform float uCell;    // dot pitch, device px
  uniform float uDot;     // drawn dot diameter, device px
  uniform float uRadius;  // head blob radius, device px
  uniform float uTaper;   // how much narrower the tail gets at its end

  // Recursive ordered Bayer. bayer2 tiles a 2x2 threshold pattern; each level
  // folds the previous one in at a quarter weight, giving an 8x8 matrix
  // without a lookup table.
  float bayer2(vec2 a) {
    a = floor(a);
    return fract(a.x / 2.0 + a.y * a.y * 0.75);
  }
  #define bayer4(a) (bayer2(0.5 * (a)) * 0.25 + bayer2(a))
  #define bayer8(a) (bayer4(0.5 * (a)) * 0.25 + bayer2(a))

  void main() {
    vec2 frag = gl_FragCoord.xy;
    vec2 cellId = floor(frag / uCell);
    vec2 cellCenter = (cellId + 0.5) * uCell;

    float field = 0.0;
    for (int i = 0; i < NODES; i++) {
      float t = float(i) / float(NODES - 1);
      float radius = uRadius * (1.0 - uTaper * t);
      float weight = (1.0 - t) * uEnergy;

      vec2 delta = cellCenter - uPoints[i];
      float dd = dot(delta, delta) / (radius * radius);
      if (dd < 1.0) {
        float falloff = 1.0 - dd;
        field += falloff * falloff * weight;
      }
    }

    // The cell only lights when it clears its own threshold, so thinning the
    // field drops dots out one at a time.
    float lit = step(bayer8(cellId), field);
    if (lit < 0.5) discard;

    // Round the lit cell into a dot rather than a square.
    float edge = length(frag - cellCenter);
    float dot = 1.0 - smoothstep(uDot * 0.5 - 1.0, uDot * 0.5 + 1.0, edge);
    float alpha = dot * clamp(field * 1.15, 0.0, 0.92);
    if (alpha < 0.01) discard;

    gl_FragColor = vec4(uAccent, alpha);
  }
`;
