export interface PacketHeader {
  m_packetFormat: number;
  m_gameYear: number;
  m_gameMajorVersion: number;
  m_gameMinorVersion: number;
  m_packetVersion: number;
  m_packetId: number;
  m_sessionUID: number | String;
  m_sessionTime: number;
  m_frameIdentifier: number;
  m_overallFrameIdentifier:number;
  m_playerCarIndex: number;
  m_secondaryPlayerCarIndex: number;
}
