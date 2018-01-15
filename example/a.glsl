attribute vec2 a_Position;
attribute float a_Normal;

uniform mat4 u_PosMatrix;
uniform float u_PosZ;

void main() {

  float z = a_Normal * u_PosZ;

  gl_Position = u_PosMatrix * vec4(a_Position, z, 1);
  // gl_PointSize = 5.0;

}
