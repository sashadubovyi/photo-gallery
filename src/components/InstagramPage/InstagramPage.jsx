import React, { useEffect } from 'react';
import s from './InstagramPage.module.scss';

const InstagramPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h2 className={s.title}>INSTAGRAM</h2>
      <div className={s.container}>
        <div className={s.instaBox}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/CzIzPtLNXtj/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow:
                '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: 'calc(100% - 2px)',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href="https://www.instagram.com/p/CzIzPtLNXtj/?utm_source=ig_embed&amp;utm_campaign=loading"
                style={{
                  background: '#FFFFFF',
                  lineHeight: '0',
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                }}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      flexGrow: '0',
                      height: '40px',
                      marginRight: '14px',
                      width: '40px',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: '1',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        marginBottom: '6px',
                        width: '100px',
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        width: '60px',
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ padding: '19% 0' }}></div>
              </a>
            </div>
          </blockquote>
          <script async src="//www.instagram.com/embed.js"></script>
        </div>

        <div className={s.instaBox}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/Cy3TrDCN7nc/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow:
                '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: 'calc(100% - 2px)',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href="https://www.instagram.com/p/Cy3TrDCN7nc/?utm_source=ig_embed&amp;utm_campaign=loading"
                style={{
                  background: '#FFFFFF',
                  lineHeight: '0',
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                }}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      flexGrow: '0',
                      height: '40px',
                      marginRight: '14px',
                      width: '40px',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: '1',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        marginBottom: '6px',
                        width: '100px',
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        width: '60px',
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ padding: '19% 0' }}></div>
                <div
                  style={{
                    display: 'block',
                    height: '50px',
                    margin: '0 auto 12px',
                    width: '50px',
                  }}
                >
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 60 60"
                    version="1.1"
                    xmlns="https://www.w3.org/2000/svg"
                  ></svg>
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <div
                    style={{
                      color: '#3897f0',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '550',
                      lineHeight: '18px',
                    }}
                  >
                    Посмотреть эту публикацию в Instagram
                  </div>
                </div>
                <div style={{ padding: '12.5% 0' }}></div>
              </a>
            </div>
          </blockquote>
        </div>

        <div className={s.instaBox}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/CyLdj11tqOs/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow:
                '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: 'calc(100% - 2px)',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href="https://www.instagram.com/p/CyLdj11tqOs/?utm_source=ig_embed&amp;utm_campaign=loading"
                style={{
                  background: '#FFFFFF',
                  lineHeight: '0',
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                }}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      flexGrow: '0',
                      height: '40px',
                      marginRight: '14px',
                      width: '40px',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: '1',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        marginBottom: '6px',
                        width: '100px',
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        width: '60px',
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ padding: '19% 0' }}></div>
                <div
                  style={{
                    display: 'block',
                    height: '50px',
                    margin: '0 auto 12px',
                    width: '50px',
                  }}
                >
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 60 60"
                    version="1.1"
                    xmlns="https://www.w3.org/2000/svg"
                  ></svg>
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <div
                    style={{
                      color: '#3897f0',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '550',
                      lineHeight: '18px',
                    }}
                  >
                    Посмотреть эту публикацию в Instagram
                  </div>
                </div>
                <div style={{ padding: '12.5% 0' }}></div>
              </a>
            </div>
          </blockquote>
        </div>

        <div className={s.instaBox}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/Cu3i0M2NC5E/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow:
                '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: 'calc(100% - 2px)',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href="https://www.instagram.com/p/Cu3i0M2NC5E/?utm_source=ig_embed&amp;utm_campaign=loading"
                style={{
                  background: '#FFFFFF',
                  lineHeight: '0',
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                }}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      flexGrow: '0',
                      height: '40px',
                      marginRight: '14px',
                      width: '40px',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: '1',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        marginBbottom: '6px',
                        width: '100px',
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: '0',
                        height: '14px',
                        width: '60px',
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ padding: '19% 0' }}></div>
                <div
                  style={{
                    display: 'block',
                    height: '50px',
                    margin: '0 auto 12px',
                    width: '50px',
                  }}
                >
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 60 60"
                    version="1.1"
                    xmlns="https://www.w3.org/2000/svg"
                  ></svg>
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <div
                    style={{
                      color: '#3897f0',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '550',
                      lineHeight: '18px',
                    }}
                  >
                    Посмотреть эту публикацию в Instagram
                  </div>
                </div>
                <div style={{ padding: '12.5% 0' }}></div>
              </a>
            </div>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default InstagramPage;
