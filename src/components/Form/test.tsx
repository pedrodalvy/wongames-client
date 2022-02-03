import { FormLink, FormWrapper } from 'components/Form';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          Custom form <a>link</a>
        </FormLink>
      </FormWrapper>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c0 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c0 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <main
        class=""
      >
        <div
          class="c0"
        >
          Custom form 
          <a>
            link
          </a>
        </div>
      </main>
    `);
  });
});
