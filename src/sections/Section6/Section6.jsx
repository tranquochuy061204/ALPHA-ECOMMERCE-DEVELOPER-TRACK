import { useState } from 'react';
import './Section6.css';
import { AiOutlineUpload } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

const Section6 = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    reviewBody: '',
    displayName: '',
    email: '',
  });

  const [uploadedImages, setUploadedImages] = useState([]);

  const [errors, setErrors] = useState({
    rating: false,
    reviewBody: false,
    displayName: false,
    email: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRatingClick = (rating) => {
    setFormData({ ...formData, rating });
    if (submitted) {
      setErrors({ ...errors, rating: rating === 0 });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (submitted) {
      setErrors({ ...errors, [field]: value.trim() === '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const newErrors = {
      rating: formData.rating === 0,
      reviewBody: formData.reviewBody.trim() === '',
      displayName: formData.displayName.trim() === '',
      email: formData.email.trim() === '',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      // Submit form
      console.log('Form submitted:', formData);
    }
  };

  const handleCancel = () => {
    setFormData({ rating: 0, reviewBody: '', displayName: '', email: '' });
    setErrors({ rating: false, reviewBody: false, displayName: false, email: false });
    setSubmitted(false);
    setUploadedImages([]);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
    }));
    setUploadedImages([...uploadedImages, ...newImages]);
    e.target.value = ''; // Reset input to allow selecting same file again
  };

  const handleRemoveImage = (id) => {
    setUploadedImages(uploadedImages.filter((img) => img.id !== id));
  };

  return (
    <div className="judge-outer ">
      <div className="page-width">
        <div className="judge-container">
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
            class="product-reviews_trust m-auto max-w-[200px]"
          ></img>
          <h2 className="section-title text-center">Real Women, Real Results: 93,000+ Transformations</h2>
          <p className="section-text text-center">All reviews verified from actual paying customers</p>
        </div>

        <div className="reviews">
          <div className="block py-24 px-16 m-0 *:leading-[1.4]">
            <div className="reviews-header text-center">
              <div className="reviews-title font-family-trirong!">
                <p>Customer Reviews</p>
              </div>
              <div className="row-stars">
                <div className="summary">
                  <div className="summary-inner">
                    <div className="summary-stars">
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-half"></span>
                      <span className="average-text font-family-montserrat">4.67 out of 5</span>
                    </div>

                    <div className="flex items-center gap-[8px] justify-center text-[#585858]">
                      Based on 110 reviews{' '}
                      <img
                        src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                        className="h-[17px] w-[17px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="histogram">
                  {[
                    { stars: 5, count: 84, p: '76%' },
                    { stars: 4, count: 17, p: '15%' },
                    { stars: 3, count: 8, p: '7%' },
                    { stars: 2, count: 1, p: '1%' },
                    { stars: 1, count: 0, p: '0%' },
                  ].map((row) => (
                    <div className="histogram-row" key={row.stars}>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < row.stars ? 'star-on' : 'star-off'}`}></span>
                        ))}
                      </div>
                      <div className="bar-container">
                        <div className="bar-fill" style={{ width: row.p }}></div>
                      </div>
                      <div className="count">{row.count}</div>
                    </div>
                  ))}
                </div>
                <div className="actions">
                  <button type="button" className="write-review-btn" onClick={() => setIsFormOpen(!isFormOpen)}>
                    {isFormOpen ? 'Cancel review' : 'Write a review'}
                  </button>
                </div>
              </div>

              <div className={`form-grid-wrapper ${isFormOpen ? 'form-grid-wrapper--open' : ''}`}>
                <div className="form-wrapper py-[24px] font-family-montserrat">
                  <div style={{ borderTop: '1px solid rgba(16, 132, 116, 0.1)' }} className="pt-[24px]">
                    <form className="mx-auto my-0 py-0 px-[16px] max-w-[600px]" onSubmit={handleSubmit}>
                      <div className="form__title mb-[16px] text-[150%] font-bold">Write a review</div>
                      <div className="fieldset">
                        <label className="mb-[8px] block">Rating</label>
                        <span
                          className="form__rating"
                          style={{ cursor: 'pointer' }}
                          onMouseLeave={() => setHoverRating(0)}
                        >
                          {[1, 2, 3, 4, 5].map((star) => (
                            <a
                              key={star}
                              data-alt={star}
                              className={`star ${(hoverRating || formData.rating) >= star ? 'star-on' : 'star-off'}`}
                              title={`${star} star${star > 1 ? 's' : ''}`}
                              role="button"
                              aria-label={`${star} star${star > 1 ? 's' : ''}`}
                              onClick={() => handleRatingClick(star)}
                              onMouseEnter={() => setHoverRating(star)}
                            ></a>
                          ))}
                          <input name="score" type="hidden" value={formData.rating} />
                        </span>
                        {errors.rating && (
                          <div className="form__error">
                            <span className="form__error-icon">⚠</span> Please select a rating.
                          </div>
                        )}
                      </div>
                      <div className="fieldset">
                        <label className="form__inline-label inline-block! cursor-pointer" htmlFor="review_body">
                          Review content
                        </label>
                        {formData.reviewBody.length > 0 && (
                          <span className="form__countdown text-[#666] text-[14px] ml-[8px]">
                            ({5000 - formData.reviewBody.length})
                          </span>
                        )}
                        <textarea
                          id="review_body"
                          rows="5"
                          name="review_body"
                          className="px-[16px] py-[8px] w-full border border-[#e4e4e4] font-family-montserrat"
                          placeholder="Start writing here..."
                          aria-label="Review content"
                          value={formData.reviewBody}
                          onChange={(e) => handleInputChange('reviewBody', e.target.value)}
                          maxLength={5000}
                        ></textarea>
                        {errors.reviewBody && (
                          <div className="form__error">
                            <span className="form__error-icon">⚠</span> This field is required.
                          </div>
                        )}
                      </div>
                      <div className="fieldset">
                        <label>Picture/Video (optional)</label>
                        <div
                          className={`media-fieldset__container flex flex-wrap gap-[10px] ${
                            uploadedImages.length === 0 ? 'justify-center' : ''
                          }`}
                        >
                          {/* Upload button */}
                          <div className="picture-fieldset__box picture-fieldset__box--input">
                            <div className="picture-fieldset__box-wrapper flex items-center justify-center">
                              <div className="media-fieldset__icon ">
                                <AiOutlineUpload className="text-[80px]" />
                              </div>
                            </div>

                            <input
                              type="file"
                              name="media"
                              className="media-fieldset__input"
                              multiple
                              accept="image/gif,image/jpeg,image/jpg,image/png,image/webp"
                              aria-label="Choose a review picture/video (optional)"
                              onChange={handleImageUpload}
                            />
                          </div>

                          {/* Uploaded images preview */}
                          {uploadedImages.map((image) => (
                            <div key={image.id} className="picture-fieldset__box picture-fieldset__box--preview">
                              <img src={image.preview} alt="Preview" className="picture-fieldset__preview-img" />
                              <button
                                type="button"
                                className="picture-fieldset__remove-btn"
                                onClick={() => handleRemoveImage(image.id)}
                                aria-label="Remove image"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Display name */}
                      <div className="fieldset">
                        <label className="mb-[8px] block text-center">
                          Display name (displayed publicly like{' '}
                          <select className="form__display-name-select">
                            <option value="full">John Smith</option>
                            <option value="initial">John S.</option>
                            <option value="first">John</option>
                            <option value="abbr">J.S.</option>
                            <option value="anonymous">Anonymous</option>
                          </select>
                          )
                        </label>
                        <input
                          type="text"
                          name="display_name"
                          className="form__input px-[16px] py-[8px] w-full border border-[#e4e4e4] font-family-montserrat"
                          placeholder="Display name"
                          aria-label="Display name"
                          value={formData.displayName}
                          onChange={(e) => handleInputChange('displayName', e.target.value)}
                        />
                        {errors.displayName && (
                          <div className="form__error">
                            <span className="form__error-icon">⚠</span> This field is required.
                          </div>
                        )}
                      </div>

                      {/* Email address */}
                      <div className="fieldset">
                        <label className="mb-[8px] block text-center">Email address</label>
                        <input
                          type="email"
                          name="email"
                          className="form__input px-[16px] py-[8px] w-full border border-[#e4e4e4] font-family-montserrat"
                          placeholder="Your email address"
                          aria-label="Email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                        {errors.email && (
                          <div className="form__error">
                            <span className="form__error-icon">⚠</span> This field is required.
                          </div>
                        )}
                      </div>

                      {/* Privacy notice */}
                      <div className="form__privacy-notice text-center text-[14px] text-[#666] my-[16px]">
                        How we use your data: We'll only contact you about the review you left, and only if necessary.
                        By submitting your review, you agree to Judge.me's{' '}
                        <a href="#" className="form__link">
                          terms
                        </a>
                        ,{' '}
                        <a href="#" className="form__link">
                          privacy
                        </a>{' '}
                        and{' '}
                        <a href="#" className="form__link">
                          content
                        </a>{' '}
                        policies.
                      </div>

                      {/* Form buttons */}
                      <div className="form__buttons flex items-center justify-center gap-[16px] mt-[24px]">
                        <button
                          type="button"
                          className="form__btn form__btn--cancel"
                          onClick={() => {
                            handleCancel();
                            setIsFormOpen(false);
                          }}
                        >
                          Cancel review
                        </button>
                        <button type="submit" className="form__btn form__btn--submit">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="row-media">
                <div className="medals-wrapper flex justify-center">
                  <div className="medals">
                    <div className="medals__container">
                      <div
                        className="medal-wrapper"
                        title="Diamond Authentic Shop. 100% of published reviews are verified reviews"
                      >
                        <a className="medal flex flex-col items-center">
                          <div
                            className="medal__image h-[80px] w-[80px]"
                            data-url="auth/diamond.svg"
                            data-alt="Judge.me Diamond Authentic Shop medal"
                          >
                            <img
                              alt="Judge.me Diamond Authentic Shop medal"
                              src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format"
                            />
                          </div>
                          <div className="medal__value text-[12px] text-[#4c8eda]">100.0</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="soft-wrapper my-[20px] border-b border-[#eee] pb-[10px]">
              <div className="sort-dropdown-wrapper text-left max-w-[1400px] mx-auto px-[40px]">
                <span className="text-[#fa8a8a] text-[14px] cursor-pointer">Most Recent ▼</span>
              </div>
            </div>

            <div className="reviews-list text-left max-w-[1400px] mx-auto md:px-[32px] p-[16px]">
              {/* Mock Review Item 1 */}
              <div className="rev divider-top flex flex-col py-[24px] border-b border-[#eee]">
                <div className="rev__header mb-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <span className="rev__rating" data-score="5" tabIndex="0" aria-label="5 star review" role="img">
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                    </span>
                  </div>
                  <span className="rev__timestamp text-[14px] text-[#888]">12/08/2025</span>
                </div>

                <div className="rev__author-wrapper flex items-center gap-[10px] mb-[12px]">
                  <div className="relative">
                    <div className="rev__icon w-[32px] h-[32px] flex items-center justify-center bg-[#f1f1f1] rounded-full text-[#888]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute -bottom-[2px] -right-[2px] bg-[#fa8a8a] text-white rounded-full w-[14px] h-[14px] flex items-center justify-center border-[2px] border-white">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="rev__author text-[#fa8a8a]">Anonymous</span>
                  <span className="rev__buyer-badge bg-[#fa8a8a] text-white text-[10px] px-[6px] py-[2px] rounded-[2px] uppercase">
                    Verified
                  </span>
                </div>

                <div className="rev__content">
                  <div className="rev__body text-[15px] leading-[1.6] text-[#333]">
                    <p>
                      Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with
                      confidence it’s working.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mock Review Item 2 */}
              <div className="rev divider-top flex flex-col py-[24px] border-b border-[#eee]">
                <div className="rev__header mb-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <span className="rev__rating" data-score="5" tabIndex="0" aria-label="5 star review" role="img">
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                    </span>
                  </div>
                  <span className="rev__timestamp text-[14px] text-[#888]">12/01/2025</span>
                </div>

                <div className="rev__author-wrapper flex items-center gap-[10px] mb-[12px]">
                  <div className="relative">
                    <div className="rev__icon w-[32px] h-[32px] flex items-center justify-center bg-[#f1f1f1] rounded-full text-[#888]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute -bottom-[2px] -right-[2px] bg-[#fa8a8a] text-white rounded-full w-[14px] h-[14px] flex items-center justify-center border-[2px] border-white">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="rev__author text-[#fa8a8a]">Anonymous</span>
                  <span className="rev__buyer-badge bg-[#fa8a8a] text-white text-[10px] px-[6px] py-[2px] rounded-[2px] uppercase">
                    Verified
                  </span>
                </div>

                <div className="rev__content">
                  <div className="rev__body text-[15px] leading-[1.6] text-[#333]">
                    <p>One month and I've already seen a difference!</p>
                  </div>
                </div>
              </div>

              {/* Mock Review Item 3 */}
              <div className="rev divider-top flex flex-col py-[24px] border-b border-[#eee]">
                <div className="rev__header mb-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <span className="rev__rating" data-score="5" tabIndex="0" aria-label="5 star review" role="img">
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                    </span>
                  </div>
                  <span className="rev__timestamp text-[14px] text-[#888]">11/23/2025</span>
                </div>

                <div className="rev__author-wrapper flex items-center gap-[10px] mb-[12px]">
                  <div className="relative">
                    <div className="rev__icon w-[32px] h-[32px] flex items-center justify-center bg-[#f1f1f1] rounded-full text-[#888]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute -bottom-[2px] -right-[2px] bg-[#fa8a8a] text-white rounded-full w-[14px] h-[14px] flex items-center justify-center border-[2px] border-white">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="rev__author text-[#fa8a8a]">Donabeth Houx</span>
                  <span className="rev__buyer-badge bg-[#fa8a8a] text-white text-[10px] px-[6px] py-[2px] rounded-[2px] uppercase">
                    Verified
                  </span>
                </div>

                <div className="rev__content">
                  <div className="rev__body text-[15px] leading-[1.6] text-[#333]">
                    <p>
                      I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no
                      longer have to worry about elephantitus in my future! Thank you so much!!!!!!
                    </p>
                  </div>
                </div>
              </div>

              {/* Mock Review Item 4 */}
              <div className="rev divider-top flex flex-col py-[24px] border-b border-[#eee]">
                <div className="rev__header mb-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <span className="rev__rating" data-score="5" tabIndex="0" aria-label="5 star review" role="img">
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                    </span>
                  </div>
                  <span className="rev__timestamp text-[14px] text-[#888]">11/17/2025</span>
                </div>

                <div className="rev__author-wrapper flex items-center gap-[10px] mb-[12px]">
                  <div className="relative">
                    <div className="rev__icon w-[32px] h-[32px] flex items-center justify-center bg-[#f1f1f1] rounded-full text-[#888]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute -bottom-[2px] -right-[2px] bg-[#fa8a8a] text-white rounded-full w-[14px] h-[14px] flex items-center justify-center border-[2px] border-white">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="rev__author text-[#fa8a8a]">Dawn Camacho</span>
                  <span className="rev__buyer-badge bg-[#fa8a8a] text-white text-[10px] px-[6px] py-[2px] rounded-[2px] uppercase">
                    Verified
                  </span>
                </div>

                <div className="rev__content">
                  <div className="rev__body text-[15px] leading-[1.6] text-[#333]">
                    <p>
                      It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I
                      purchased another round. I'm happy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mock Review Item 5 */}
              <div className="rev divider-top flex flex-col py-[24px] border-b border-[#eee]">
                <div className="rev__header mb-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <span className="rev__rating" data-score="5" tabIndex="0" aria-label="5 star review" role="img">
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                      <span className="star star-on"></span>
                    </span>
                  </div>
                  <span className="rev__timestamp text-[14px] text-[#888]">11/13/2025</span>
                </div>

                <div className="rev__author-wrapper flex items-center gap-[10px] mb-[12px]">
                  <div className="relative">
                    <div className="rev__icon w-[32px] h-[32px] flex items-center justify-center bg-[#f1f1f1] rounded-full text-[#888]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute -bottom-[2px] -right-[2px] bg-[#fa8a8a] text-white rounded-full w-[14px] h-[14px] flex items-center justify-center border-[2px] border-white">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="rev__author text-[#fa8a8a]">Anonymous</span>
                  <span className="rev__buyer-badge bg-[#fa8a8a] text-white text-[10px] px-[6px] py-[2px] rounded-[2px] uppercase">
                    Verified
                  </span>
                </div>

                <div className="rev__content">
                  <div className="rev__body text-[15px] leading-[1.6] text-[#333]">
                    <p>I have noticed a difference on my swelling.</p>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="paginate flex justify-center gap-[15px] mt-[30px] font-family-montserrat">
                <span className="paginate__page curt font-bold text-[#202223] text-[18px] cursor-default">1</span>
                <a className="paginate__page text-[#FA8a8a] text-[18px] cursor-pointer hover:underline">2</a>
                <a className="paginate__page text-[#FA8a8a] text-[18px] cursor-pointer hover:underline">3</a>
                <a className="paginate__page text-[#FA8a8a] text-[18px] cursor-pointer hover:underline">›</a>
                <a className="paginate__page text-[#FA8a8a] text-[18px] cursor-pointer hover:underline">»</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
